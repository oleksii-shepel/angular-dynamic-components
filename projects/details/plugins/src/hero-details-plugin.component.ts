import { Component } from '@angular/core';
import { DynamicComponent, Hero } from 'core';

export class HeroDetailsPluginConfig {
  hero!: Hero;
}

@Component({
  selector: 'hero-details-plugin',
  template: `
    <app-hero-details [hero]="config.hero"></app-hero-details>
  `,
  styles: [`
    div {
      margin: 10px 10px;
      border-radius: 10px;
      background-color: #ededf5;
      padding: 20px;
      align-items: stretch;
      justify-content: stretch;
    }
  `]
})
export class HeroDetailsPluginComponent implements DynamicComponent<HeroDetailsPluginConfig> {
  config!: HeroDetailsPluginConfig;
}
