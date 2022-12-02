import { TypeOrmModule } from '@nestjs/typeorm';
import { Blokslot } from './entities/blokslot.entity';
import { Module } from '@nestjs/common';
import { BlokslotsService } from './blokslots.service';
import { BlokslotsController } from './blokslots.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Blokslot])],
  controllers: [BlokslotsController],
  providers: [BlokslotsService],
})
export class BlokslotsModule {}
