import { Component, Input } from '@angular/core';

import { Hero } from 'core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [`
    div {
      border-radius: 10px;
      background-color: #ffcce6;
      padding: 20px;
      margin-bottom: 20px;
    }
  `]
})
export class HeroDetailsComponent {
  @Input() hero!: Hero;
}
