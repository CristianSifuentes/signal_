import { Routes } from '@angular/router';

import { ProductAddComponent } from './components/product-add/product-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Hero } from './interfaces/hero.interface';
import { HeroListComponent } from './components/hero-list/hero-list.component';

export const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'hero-list', component: HeroListComponent
  }
];
