import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];
  createProduct(title: string, description: string, price: number) {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, description, price);
    return newProduct;
  }
  getAllProducts() {
    return [...this.products];
  }
}
