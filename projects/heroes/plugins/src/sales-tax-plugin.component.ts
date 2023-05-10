import { Component } from '@angular/core';
import { DynamicComponent } from 'core';

export class SalesTaxPluginConfig {
  amount!: string;
}

@Component({
  selector: 'sales-tax-plugin',
  template: `
    <app-sales-tax [amount]="config.amount"></app-sales-tax>
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
export class SalesTaxPluginComponent implements DynamicComponent<SalesTaxPluginConfig> {
  config!: SalesTaxPluginConfig;
}
