import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://nikolai:qwertyuiop@cluster0.ya4dq.mongodb.net/products?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
})
export class AppModule {}
