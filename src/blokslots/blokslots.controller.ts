import { UpdateBlokslotDto } from './dto/update-blokslot.dto';
import { Controller, Get, Patch, Param } from '@nestjs/common';
import { BlokslotsService } from './blokslots.service';

@Controller('blokslots')
export class BlokslotsController {
  constructor(private readonly blokslotsService: BlokslotsService) {}

  @Get()
  findAll() {
    return this.blokslotsService.findAll();
  }
  @Patch(':id/masuk')
  async masuk(@Param() params): Promise<UpdateBlokslotDto> {
    //const oldData = await this.blokslotsService.findById(params.id);
    return await this.blokslotsService.update(params.id, true);
  }
  @Patch(':id/keluar')
  async keluar(@Param() params): Promise<UpdateBlokslotDto> {
    return await this.blokslotsService.update(params.id, false);
  }
}
