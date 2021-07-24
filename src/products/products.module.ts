import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';

@Module({
  providers: [ProductsModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
