import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentCategoryDto } from './dto/equipment-category.dto';
import { EquipmentCategory } from './interfaces/equipment-category.interface';

@Controller('api/equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('kraken')
  async createOrUpdate(@Body() equipmentCategoryDto: EquipmentCategoryDto[]) {
    for (let i = 0; i < equipmentCategoryDto.length; i++) {
      const currentEquipment = equipmentCategoryDto[i];
      await this.equipmentService.updateEquipment(currentEquipment);
    }
    return;
  }
}
