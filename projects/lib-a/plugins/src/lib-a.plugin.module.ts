import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HOOK_COMPONENTS, hookConfig } from 'core'
import { LibAComponent } from './lib-a.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  providers: [
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: hookConfig({
        id: 'lib-a-component',
        label: 'lib-a-component',
        component: LibAComponent,
      }),
    }
  ],
})
export class LibAPluginModule {}
