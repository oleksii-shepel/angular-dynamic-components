import { NgModule } from '@angular/core';
import { DynamicComponentModule, DynamicComponentService } from './dynamic-component';
import { DynamicComponentUtilsService } from './dynamic-component-utils';

@NgModule({
  declarations: [

  ],
  imports: [
    DynamicComponentModule
  ],
  exports: [
    DynamicComponentModule,
  ],
  providers: [
    DynamicComponentService,
    DynamicComponentUtilsService
  ]
})
export class CoreModule { }
