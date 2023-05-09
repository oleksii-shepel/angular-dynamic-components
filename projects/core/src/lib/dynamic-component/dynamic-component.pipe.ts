import { AsyncPipe } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core'

import { DynamicComponentService } from './dynamic-component.service'

@Pipe({
  name: 'hasDynamicComponent',
})
export class HasDynamicComponentPipe implements PipeTransform {
  constructor(
    private readonly asyncPipe: AsyncPipe,
    private readonly dynamicComponentService: DynamicComponentService,
  ) {}

  public transform(componentId: string): boolean | null {
    if (!componentId) {
      return false
    }

    return this.asyncPipe.transform(this.dynamicComponentService.hasComponent$(componentId))
  }
}
