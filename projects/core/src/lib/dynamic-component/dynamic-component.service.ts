import { Injectable, InjectionToken, Injector } from '@angular/core'
import { BehaviorSubject, filter, map, Observable, take } from 'rxjs'

import { DynamicComponentDefinition } from './dynamic-component.model'

export const HOOK_COMPONENTS = new InjectionToken<DynamicComponentDefinition[]>('core.hook.dynamic.component')

export const hookConfig = <T extends DynamicComponentDefinition>(config: T): T => config

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentService {
  readonly state$ = new BehaviorSubject(new Set<DynamicComponentDefinition>())

  constructor(private injector: Injector) {
    const components = this.injector.get<DynamicComponentDefinition[]>(HOOK_COMPONENTS, [])
    components.forEach((cmp) => this.state.add(cmp))
    this.emitNewState()
  }

  get state(): Set<DynamicComponentDefinition> {
    return this.state$.value
  }

  emitNewState() {
    this.state$.next(this.state)
  }

  getById$(componentId: string): Observable<DynamicComponentDefinition | undefined> {
    return this.state$.pipe(
      filter(({ size }) => size > 0),
      map((components) => Array.from(components).find(({ id }) => id === componentId)),
      take(1),
    )
  }

  hasComponent$(componentId: string): Observable<boolean> {
    return this.getById$(componentId).pipe(map((c) => !!c))
  }
}
