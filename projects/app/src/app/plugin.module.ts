import { NgModule } from '@angular/core'
import { LibAPluginModule } from 'lib-a/plugins'
import { LibBPluginModule } from 'lib-b/plugins'

@NgModule({
  imports: [LibAPluginModule, LibBPluginModule],
  exports: [LibAPluginModule, LibBPluginModule],
})
export class PluginModule {}
