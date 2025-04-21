import { Component, signal } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { CommonModule } from '@angular/common';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-dashboard',
  standalone: true,
  imports: [CommonModule, HeroListComponent],
  template: `
    <h2>Dashboard</h2>
    <app-hero-list
      [heroes]="heroes()"
      (heroSelected)="selectHero($event)">
    </app-hero-list>

    <div *ngIf="selectedHero()">
      <p>You selected: {{ selectedHero()?.name }}</p>
    </div>
  `
})
export class HeroDashboardComponent {
  // Angular 16+ signal state
  heroes = signal<Hero[]>([
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Wonder Woman' }
  ]);

  selectedHero = signal<Hero | null>(null);

  selectHero(hero: Hero) {
    this.selectedHero.set(hero);
  }
}
