import { NgModule } from '@angular/core';
import { CoreModule } from 'core';
import { LibBContainerComponent } from './lib-b.container.component';



@NgModule({
  declarations: [
    LibBContainerComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    LibBContainerComponent
  ]
})
export class LibBModule { }
