import { Component, inject, input } from '@angular/core';
import {  ProductAddComponent } from './product-add.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'product-list',
  imports: [CommonModule, FormsModule, ProductAddComponent, ProductListComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public productService = inject(ProductService);

}
