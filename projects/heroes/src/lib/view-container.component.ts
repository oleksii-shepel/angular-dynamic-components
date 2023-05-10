import { Component, OnInit } from '@angular/core';

import { Hero } from 'core';
import { HeroService } from './hero.service';

@Component({
  selector:    'app-hero-list',
  templateUrl: './view-container.component.html',
  styles: [`
    div {
      border-radius: 10px;
      background-color: #b3d9ff;
      padding: 20px;
      margin-bottom: 20px;
    }
  `],
  providers:  [ HeroService ]
})
export class ViewContainerComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
