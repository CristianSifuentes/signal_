import { Component, inject } from '@angular/core';
import {  ProductAddComponent } from '../product-add/product-add.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'dasnhboard',
  imports: [ProductListComponent, ProductAddComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public productService = inject(ProductService);

}
