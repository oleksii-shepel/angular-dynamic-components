import { Component } from '@angular/core';

@Component({
  selector:    'app-sales-tax-calculator',
  template: `
  <div>
    <h2>Sales Tax Calculator</h2>
    <p><em>Enter a number and press enter to calculate tax.</em></p>
    <label for="amount-input">Amount: </label>
    <input type="text" id="amount-input" #amountBox (change)="0">
    <dynamic-component componentId="sales-tax-plugin" [config]="{amount: amountBox.value}"></dynamic-component>
  </div>
  `,
  styles: [`
    div {
      border-radius: 10px;
      background-color: #ffffb3;
      padding: 20px;
      margin-bottom: 20px;
    }
  `]
})
export class ViewContainerComponent {
  constructor() { }
}
