import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddresssService } from './addresss.service';
import { AddresssController } from './addresss.controller';
import { Address } from './address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddresssService],
  controllers: [AddresssController],
})
export class AddresssModule {}
