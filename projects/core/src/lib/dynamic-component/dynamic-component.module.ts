import { AsyncPipe, CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { DynamicComponentComponent, DynamicComponentRoute } from './dynamic-component.component'
import { HasDynamicComponentPipe } from './dynamic-component.pipe'
import { DynamicComponentService } from './dynamic-component.service'

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicComponentRoute, DynamicComponentComponent, HasDynamicComponentPipe],
  exports: [DynamicComponentComponent, HasDynamicComponentPipe],
  providers: [DynamicComponentService, AsyncPipe],
})
export class DynamicComponentModule {}
