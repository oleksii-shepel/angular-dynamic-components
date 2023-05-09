import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  KeyValueDiffers,
  Type,
} from '@angular/core'

export class DynamicComponentUtils<C> {
  constructor(
    public componentType: Type<C>,
    public componentFactory: ComponentFactory<C>,
  ) {}

  public emulateChangeDetection(
    component: ComponentRef<C>,
    hostInputs: any,
    options: {
      extraInputs?: Record<any, any>
    } = {},
  ): void {
    const instance: any = component.instance

    // @ts-ignore
    const componentDef = this.componentFactory.componentDef
    const NOT_PROVIDED = Symbol('notProvidedValue')

    this.componentFactory?.inputs.forEach((item) => {
      let newValue = NOT_PROVIDED

      if (item.propName in hostInputs) {
        newValue = hostInputs[item.propName]
      } else if (options.extraInputs && item.propName in options.extraInputs) {
        newValue = options.extraInputs[item.propName]
      }

      if (newValue !== NOT_PROVIDED && instance[item.propName] !== newValue) {
        componentDef.setInput(instance, newValue, item.templateName, item.propName)
      }
    })
  }
}

@Injectable()
export class DynamicComponentUtilsService {
  constructor(
    private readonly keyValueDiffers: KeyValueDiffers,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  public getUtils<C>(componentType: Type<C>): DynamicComponentUtils<C> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType)

    return new DynamicComponentUtils(componentType, componentFactory)
  }
}
