import { NgModule } from '@angular/core';
import { CoreModule } from 'core';
import { LibAContainerComponent } from './lib-a.container.component';



@NgModule({
  declarations: [
    LibAContainerComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    LibAContainerComponent
  ]
})
export class LibAModule { }
