import { Component, Input } from '@angular/core';

import { SalesTaxService } from './sales-tax.service';
import { TaxRateService } from './tax-rate.service';

@Component({
  selector:    'app-sales-tax',
  template: `
    <div *ngIf="amount">
      <p>The sales tax is {{ getTax(amount) | currency:'USD':true:'1.2-2' }}</p>
    </div>
  `,
  styles: [`
    div {
      border-radius: 10px;
      background-color: #ffcce6;
      padding: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `],
  providers: [SalesTaxService, TaxRateService]
})
export class SalesTaxComponent {
  @Input() amount!: string;

  constructor(private salesTaxService: SalesTaxService) { }

  getTax(value: string | number) {
    return this.salesTaxService.getVAT(value);
  }
}
