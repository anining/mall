import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddresssService } from './addresss.service';
import { Address } from './address.entity';

@Controller('address')
export class AddresssController {
  constructor(private readonly addresssService: AddresssService) {}

  @Get()
  findAll(): Promise<Address[]> {
    return this.addresssService.findAll();
  }

  @Post()
  async save(@Body() address: Address): Promise<void> {
    return this.addresssService.save(address);
  }
}
