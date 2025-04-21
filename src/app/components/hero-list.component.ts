import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";
import { Hero } from "../models/hero.model";

@Component({
  selector: 'app-hero-list',
  imports: [CommonModule],
  standalone: true,
  template: `
    <h3>Hero List</h3>
    <ul>
      <li *ngFor="let hero of heroes()"
          (click)="onSelect(hero)"
          style="cursor: pointer;">
        {{ hero.name }}
      </li>
    </ul>
  `
})
export class HeroListComponent {
  // Angular 16+ Signals Input
  heroes = input.required<Hero[]>();

  @Output() heroSelected = new EventEmitter<Hero>();
  onSelect(hero: Hero) {
    this.heroSelected.emit(hero);
  }

}
