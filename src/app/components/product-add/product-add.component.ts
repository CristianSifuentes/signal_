import { Component, output, signal } from '@angular/core';
import { Product } from '../../interfaces/product.interfece';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent {

  name = signal('');
  price = signal(0);


  productAdded = output<Product>();

  addProduct() {
    if (!this.name || this.price() <= 0) {
      return;
    }
    const productAdded: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      price: this.price(),
    }
    this.productAdded.emit(productAdded);
    this.resetFields();
  }

 resetFields() {
   this.name.set('');
   this.price.set(0);
 }
}

