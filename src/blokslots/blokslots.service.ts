import { UpdateBlokslotDto } from './dto/update-blokslot.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blokslot } from './entities/blokslot.entity';

@Injectable()
export class BlokslotsService {
  constructor(
    @InjectRepository(Blokslot)
    private blokslotRepository: Repository<Blokslot>,
  ) {}

  async findAll() {
    try {
      return await this.blokslotRepository.findBy({ isStatus: false });
    } catch (err) {
      return err;
    }
  }

  async findById(blokslot_id: string): Promise<Blokslot> {
    try {
      return await this.blokslotRepository.findOneBy({ blokslot_id });
    } catch (err) {
      return err;
    }
  }

  async update(
    id: string,
    updated_values: boolean,
  ): Promise<UpdateBlokslotDto> {
    try {
      const result = await this.blokslotRepository.update(id, {
        isStatus: updated_values,
      });
      if (result) {
        return;
      }
    } catch (err) {
      return err;
    }
  }
}
