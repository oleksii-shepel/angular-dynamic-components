import { Component } from '@angular/core';
import { DynamicComponent } from 'core';


@Component({
  selector: 'lib-a-component',
  template: `
    <div>
      <h2>lib-a-component</h2>
    </div>
  `,
  styles: [`
    div {
      margin: 10px 10px;
      border-radius: 10px;
      background-color: #e7f8e2;
      padding: 20px;
      align-items: stretch;
      justify-content: stretch;
    }
  `]
})
export class LibAComponent implements DynamicComponent<any> {
  config: any;
}
