import { NgModule } from '@angular/core';
import { ViewContainerComponent } from './view-container.component';
import { BackendService } from './backend.service';
import { HeroService } from './hero.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SalesTaxService } from './sales-tax.service';
import { TaxRateService } from './tax-rate.service';
import { Logger } from './logger.service';
import { CoreModule } from 'core';
import { SalesTaxComponent } from './sales-tax.component';



@NgModule({
  declarations: [
    SalesTaxComponent,
    ViewContainerComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    SalesTaxComponent,
    ViewContainerComponent
  ],
  providers: [
    Logger,
    BackendService,
    HeroService,
    SalesTaxService,
    TaxRateService
  ]
})
export class HeroesModule { }
