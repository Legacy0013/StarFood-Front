import {Product} from './product.model';


export class ProductOrder {
  orderId: number;
  product: Product;
  quantity: number;


  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
