import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular dynamic components</h1>
    <lib-a-container></lib-a-container>
    <lib-b-container></lib-b-container>
  `
})
export class AppComponent { }
