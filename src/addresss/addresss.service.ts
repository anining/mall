import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddresssService {
  constructor(
    @InjectRepository(Address)
    private addresssRepository: Repository<Address>,
  ) {}

  findAll(): Promise<Address[]> {
    return this.addresssRepository.find();
  }

  findOne(id: string): Promise<Address> {
    return this.addresssRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.addresssRepository.delete(id);
  }

  async save(address: Address): Promise<void> {
    await this.addresssRepository.save(address);
  }
}
