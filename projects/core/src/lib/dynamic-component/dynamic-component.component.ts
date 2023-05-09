import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Input,
  OnChanges,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'

import { DynamicComponentUtils, DynamicComponentUtilsService } from '../dynamic-component-utils'

import { DynamicComponent, DynamicComponentDefinition, DynamicComponentRouteData } from './dynamic-component.model'
import { DynamicComponentService } from './dynamic-component.service'

@Component({
  selector: 'dynamic-component',
  templateUrl: 'dynamic-component.component.html',
})
export class DynamicComponentComponent<I extends DynamicComponent = DynamicComponent, T = any> implements OnChanges {
  protected dynamicComponentUtils?: DynamicComponentUtils<any>

  private componentRef!: ComponentRef<I & T>

  public notFoundError = true

  public error: any

  @Input()
  public componentId!: string

  @Input()
  public config: any

  @Input()
  public componentClass?: string

  /** Experimental */
  @Input()
  public inputs?: Record<any, any>

  @ViewChild('host', { read: ViewContainerRef, static: true })
  private viewContainerRef!: ViewContainerRef

  @ViewChild('projectableContent', { static: true })
  public projectableContent?: TemplateRef<any>

  get instance(): (I & T) | undefined {
    return this.componentRef?.instance
  }

  constructor(
    private serviceDynamicComponent: DynamicComponentService,
    private renderer2: Renderer2,
    private readonly dynamicComponentUtilsService: DynamicComponentUtilsService,
  ) {}

  public ngOnChanges() {
    this.serviceDynamicComponent
      .getById$(this.componentId)
      .subscribe((dynamicComponent) => this.loadComponent(dynamicComponent as DynamicComponentDefinition<I>))
  }

  public loadComponent(dynamicComponent: DynamicComponentDefinition<I> | undefined) {
    if (this.canEmulateChangeDetection()) {
      this.dynamicComponentUtils?.emulateChangeDetection(this.componentRef, this.inputs)
      return
    }

    try {
      this.error = undefined
      this.viewContainerRef.clear()

      if (!dynamicComponent) {
        this.error = `Component not found`
        return
      }

      this.dynamicComponentUtils = this.dynamicComponentUtilsService.getUtils(dynamicComponent.component)

      this.componentRef = this.viewContainerRef.createComponent<I & T>(this.dynamicComponentUtils.componentType, {
        projectableNodes: this.projectableNodes(this.dynamicComponentUtils.componentFactory.ngContentSelectors),
      })

      if (this.componentClass) {
        this.renderer2.addClass(this.componentRef.location.nativeElement, this.componentClass)
      }

      if (this.canEmulateChangeDetection()) {
        this.dynamicComponentUtils.emulateChangeDetection(this.componentRef, this.inputs)
      } else {
        this.componentRef.instance.config = this.config
      }
    } catch (ex) {
      this.error = ex
    }
  }

  protected projectableNodes(ngContentSelectors: string[]): Node[][] {
    if (!this.projectableContent) {
      return []
    }

    const rootNodes = this.projectableContent.createEmbeddedView(this.projectableContent).rootNodes

    return this.getNgContent(rootNodes, ngContentSelectors)
  }

  private getNgContent(rootNodes: Element[], ngSelectors: string[]) {
    const nodes = Array.from(rootNodes)
    const projectableNodes: any[] = ngSelectors.map(() => [])
    const wildcardIdx = ngSelectors.findIndex((selector) => selector === '*')

    nodes.forEach((node) => {
      if (node instanceof Element) {
        // get element node that matches a select which is not the wildcard
        const projectedToIdx = ngSelectors.findIndex((selector, i) => i !== wildcardIdx && node.matches(selector))

        if (projectedToIdx !== -1) {
          // add it to the corresponding projectableNodes and return
          projectableNodes[projectedToIdx].push(node)
          return
        }
      }

      if (wildcardIdx > -1) {
        // when there is a wildcard and it's not an Element or it cannot be,
        // matched to the selection up, add it to the global ng-content
        projectableNodes[wildcardIdx].push(node)
      }
    })

    return projectableNodes
  }

  protected canEmulateChangeDetection(): boolean {
    return (
      !!this.dynamicComponentUtils &&
      !!this.inputs &&
      this.componentRef &&
      typeof (this.componentRef.instance as any)['ngOnChanges'] === 'function'
    )
  }
}

@Component({
  template: `<dynamic-component
    *ngIf="data"
    [componentId]="data.componentId"
    [config]="data.config"
  ></dynamic-component>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DynamicComponentRoute<T extends object = any> {
  data!: Data | DynamicComponentRouteData<T>
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.route.data.subscribe((data) => {
      this.data = data
      this.cdr.markForCheck()
    })
  }
}
