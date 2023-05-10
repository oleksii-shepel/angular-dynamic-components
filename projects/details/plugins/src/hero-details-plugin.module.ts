import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HOOK_COMPONENTS, hookConfig } from 'core'
import { HeroDetailsModule } from 'details'
import { HeroDetailsPluginComponent } from './hero-details-plugin.component'

@NgModule({
  imports: [
    CommonModule,
    HeroDetailsModule
  ],
  exports: [
    HeroDetailsPluginComponent
  ],
  declarations: [
    HeroDetailsPluginComponent
  ],
  providers: [
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: hookConfig({
        id: 'hero-details-plugin',
        label: 'hero-details-plugin',
        component: HeroDetailsPluginComponent,
      }),
    }
  ],
})
export class HeroDetailsPluginModule {}
