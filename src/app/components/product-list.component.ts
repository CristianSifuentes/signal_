import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../interfaces/product.interfece';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = input.required<Product[]>();

  listName = input.required<string>();

}
