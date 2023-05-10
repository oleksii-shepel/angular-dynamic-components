import { NgModule } from '@angular/core'
import { SalesTaxPluginModule } from 'heroes/plugins'
import { HeroDetailsPluginModule } from 'details/plugins'

@NgModule({
  imports: [HeroDetailsPluginModule, SalesTaxPluginModule],
  exports: [HeroDetailsPluginModule, SalesTaxPluginModule],
})
export class PluginsModule {}
