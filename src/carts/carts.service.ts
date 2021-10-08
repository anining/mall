import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
  ) {}

  findAll(): Promise<Cart[]> {
    return this.cartsRepository.find();
  }

  findOne(id: string): Promise<Cart> {
    return this.cartsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cartsRepository.delete(id);
  }

  async save(cart: Cart): Promise<void> {
    await this.cartsRepository.save(cart);
  }
}
