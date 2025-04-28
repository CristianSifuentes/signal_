import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interfece';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = input.required<Product[]>();

  listName = input.required<string>();

}
