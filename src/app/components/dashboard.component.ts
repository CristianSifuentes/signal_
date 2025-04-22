import { Component, inject, input } from '@angular/core';
import {  ProductAddComponent } from './product-add.component';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/ProductService';
import { producerAccessed } from '@angular/core/primitives/signals';

@Component({
  selector: 'dasnhboard',
  imports: [ProductListComponent, ProductAddComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public productService = inject(ProductService);

}
