import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../interfaces/product.interfece';


@Component({
  selector: 'product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent {
  name = '';
  price = 0;

  productAdded = output<Product>();

  emitProduct() {
    if (!this.name || this.price <= 0) {
      return;
    }
    const productAdded: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.name,
      price: this.price,
    }
    this.productAdded.emit(productAdded);

    this.name = '';
    this.price = 0;
  }
}
