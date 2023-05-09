import { Component } from '@angular/core';

@Component({
  selector: 'lib-a-container',
  template: `
    <div>
      <h2>lib-a-container</h2>
      <dynamic-component componentId="lib-b-component" [config]="{}"></dynamic-component>
    </div>
  `,
  styles: [`
    div:not(div > div) {
      width: 90%;
      height: 200px;
      margin: 30px auto;
      border-radius: 10px;
      background-color: #e1e1ef;
      padding: 30px;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class LibAContainerComponent {

}
