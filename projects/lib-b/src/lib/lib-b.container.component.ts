import { Component } from '@angular/core';

@Component({
  selector: 'lib-b-container',
  template: `
    <div>
      <h2>lib-b-container</h2>
      <dynamic-component componentId="lib-a-component" [config]="{}"></dynamic-component>
    </div>
  `,
  styles: [`
   div:not(div > div) {
      width: 90%;
      height: 200px;
      margin: 30px auto;
      border-radius: 10px;
      background-color: #cff1c5;
      padding: 30px;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class LibBContainerComponent {

}
