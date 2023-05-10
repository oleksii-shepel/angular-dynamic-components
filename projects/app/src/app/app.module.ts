import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from 'core';
import { PluginsModule } from './plugins.module';
import { HeroesModule } from 'projects/heroes/src/public-api';
import { HeroDetailsModule } from 'projects/details/src/lib/hero-details.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HeroesModule,
    HeroDetailsModule,
    PluginsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
