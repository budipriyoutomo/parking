import { BlokslotDto } from './blokslot.dto';
import { PickType } from '@nestjs/swagger';

export class UpdateBlokslotDto extends PickType(BlokslotDto, [
  'isStatus',
] as const) {}
