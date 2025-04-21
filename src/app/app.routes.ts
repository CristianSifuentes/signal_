import { Routes } from '@angular/router';
import { HeroDashboardComponent } from './components/hero-dashboard.component';
import { HeroListComponent } from './components/hero-list.component';
import { ProductAddComponent } from './components/product-add.component';

export const routes: Routes = [
  {
    path: '', component: ProductAddComponent

  },
  {
    path: 'list', component: HeroListComponent

  }
];
