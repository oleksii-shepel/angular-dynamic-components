import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HOOK_COMPONENTS, hookConfig } from 'core'
import { SalesTaxPluginComponent } from './sales-tax-plugin.component'
import { HeroesModule } from 'heroes'

@NgModule({
  imports: [
    CommonModule,
    HeroesModule
  ],
  declarations: [
    SalesTaxPluginComponent
  ],
  exports: [
    SalesTaxPluginComponent
  ],
  providers: [
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: hookConfig({
        id: 'sales-tax-plugin',
        label: 'sales-tax-plugin',
        component: SalesTaxPluginComponent,
      }),
    }
  ],
})
export class SalesTaxPluginModule {}
