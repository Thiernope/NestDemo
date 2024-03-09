import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { SoldsModule } from './solds/solds.module';

@Module({
  imports: [SoldsModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
