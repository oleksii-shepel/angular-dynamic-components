import { NgModule } from '@angular/core';
import { CoreModule } from 'core';
import { HeroDetailsComponent } from './hero-details.component';
import { ViewContainerComponent } from './view-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroDetailsComponent,
    ViewContainerComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroDetailsComponent,
    ViewContainerComponent
  ]
})
export class HeroDetailsModule { }
