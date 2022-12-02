import { PartialType } from '@nestjs/swagger';
import { BlokslotDto } from './blokslot.dto';

export class BlokslotidDto extends PartialType(BlokslotDto) {
  readonly blokName: string;
  readonly slotName: string;
  readonly isStatus: boolean;
}
