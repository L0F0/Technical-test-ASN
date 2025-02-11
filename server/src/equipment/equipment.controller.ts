import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentCategoryDto } from './dto/equipment-category.dto';

@Controller('api/equipment')
export class EquipmentController {
  constructor(private equipmentService: EquipmentService) {}

  @Post('kraken')
  async createOrUpdate(
    @Body() equipmentCategoryDto: { equipment: EquipmentCategoryDto[] },
  ) {
    for (let i = 0; i < equipmentCategoryDto.equipment.length; i++) {
      const currentEquipment = equipmentCategoryDto.equipment[i];
      await this.equipmentService.updateEquipment(currentEquipment);
    }
    return 'ok';
  }
}
