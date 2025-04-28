import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero-service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Hero List</h2>

    <ul>
      <li *ngFor="let hero of heroes()">
        <!-- {{ '{' }} hero.name {{ '}' }} -->
        {{ hero.name }}
        <button (click)="remove(hero.id)">Remove</button>
      </li>
    </ul>

    <input [(ngModel)]="newHeroName" placeholder="New hero" />
    <button (click)="add()">Add Hero</button>
  `
})
export class HeroListComponent {
  newHeroName = '';
  heroes = signal<Hero[]>([]);

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  add(){
    if(this.newHeroName.trim()){
      const newHero = {
        id: Math.floor(Math.random() * 1000),
        name: this.newHeroName.trim()
      };
      this.heroService.addHero(newHero);
      this.newHeroName = '';
    }
  }
  remove(id:number){
    this.heroService.removeHero(id);
  }

}
