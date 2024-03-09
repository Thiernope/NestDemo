import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  createProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ) {
    const newProduct = this.productService.createProduct(
      productTitle,
      productDescription,
      productPrice,
    );
    return newProduct;
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
