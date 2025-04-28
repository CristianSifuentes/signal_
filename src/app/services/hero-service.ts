import { Injectable, signal  } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes = signal<Hero[]>([
    { id: 1, name: 'Goku' },
    { id: 2, name: 'Vegeta' },
    { id: 3, name: 'Piccolo' },
    { id: 4, name: 'Gohan' },
    { id: 5, name: 'Krillin' },
    { id: 6, name: 'Bulma' },
    { id: 7, name: 'Trunks' },
    { id: 8, name: 'Frieza' },
    { id: 9, name: 'Cell' },
    { id: 10, name: 'Majin Buu' },
    { id: 11, name: 'Beerus' },
    { id: 12, name: 'Whis' },
    { id: 13, name: 'Jiren' },
    { id: 14, name: 'Hit' },
    { id: 15, name: 'Broly' },
    { id: 16, name: 'Zamasu' },
    { id: 17, name: 'Gogeta' },
    { id: 18, name: 'Vegito' },
    { id: 19, name: 'Android 18' },
    { id: 20, name: 'Android 17' }
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
