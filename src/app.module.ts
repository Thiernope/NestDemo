import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
