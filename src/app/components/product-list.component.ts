import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../interfaces/product.interfece';

@Component({
  selector: 'product-list',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  listName = input.required<string>();

}
