import { Component, Type } from '@angular/core'

/**
 * @example
 * ```
 *   <dynamic-component
 *     componentId="angular.project.widget"
 *     [config]="{ text: 'Hello world' }"
 *   ></dynamic-component>
 * ```
 */
export interface DynamicComponentDefinition<D extends DynamicComponent = DynamicComponent> {
  id: string
  label: string
  component: Type<D>
}

/**
 * Use this interface on any component to define the interchange between config and display component.
 */
export interface DynamicComponent<T = any, I extends any[] = any[]> extends Component {
  config: T
  save?: (...args: I) => void
}

export class DynamicComponentRouteData<T extends object = any> {
  constructor(public componentId: string, public config: T) {}
}
