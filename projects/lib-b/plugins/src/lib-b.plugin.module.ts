import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HOOK_COMPONENTS, hookConfig } from 'core'
import { LibBComponent } from './lib-b.component'

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
        id: 'lib-b-component',
        label: 'lib-b-component',
        component: LibBComponent,
      }),
    }
  ],
})
export class LibBPluginModule {}
