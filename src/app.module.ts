import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { Product } from './products/product.entity';
import { Order } from './orders/order.entity';
import { Cart } from './carts/cart.entity';
import { Address } from './addresss/address.entity';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { AddresssModule } from './addresss/addresss.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'mall',
      entities: [User, Product, Order, Cart, Address],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    AddresssModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
