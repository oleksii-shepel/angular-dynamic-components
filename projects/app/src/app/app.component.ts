import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular dynamic components</h1>
    <app-hero-list></app-hero-list>
    <app-sales-tax-calculator></app-sales-tax-calculator>
  `
})
export class AppComponent { }
