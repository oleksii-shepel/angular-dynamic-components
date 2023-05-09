import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from 'core';
import { LibAModule } from 'lib-a';
import { LibBModule } from 'lib-b';
import { PluginModule } from './plugin.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    LibAModule,
    LibBModule,
    PluginModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
