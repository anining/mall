import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Post()
  async save(@Body() order: Order): Promise<void> {
    return this.ordersService.save(order);
  }
}
