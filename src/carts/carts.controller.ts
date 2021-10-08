import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Cart } from './cart.entity';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  findAll(): Promise<Cart[]> {
    return this.cartsService.findAll();
  }

  @Post()
  async save(@Body() cart: Cart): Promise<void> {
    return this.cartsService.save(cart);
  }
}
