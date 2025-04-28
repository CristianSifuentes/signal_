import { Injectable, signal  } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes = signal<Hero[]>([
    { id: 1, name: 'Goku' },
    { id: 2, name: 'Vegeta' }
  ]);

  getHeroes() {
    return this.heroes;
  }
  addHero(hero: Hero) {
    this.heroes.update((list) => [...list, hero]);
  }
  removeHero(id: number) {
    this.heroes.update((list) => list.filter(hero => hero.id !== id));
  }



}
