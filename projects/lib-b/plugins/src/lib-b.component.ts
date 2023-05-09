import { Component } from '@angular/core';
import { DynamicComponent } from 'core';


@Component({
  selector: 'lib-b-component',
  template: `
    <div>
      <h2>lib-b-component</h2>
    </div>
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
export class LibBComponent implements DynamicComponent<any> {
  config: any;
}
