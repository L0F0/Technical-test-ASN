import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentCategoryDto } from './dto/equipment-category.dto';
import { EquipmentCategory } from './interfaces/equipment-category.interface';

@Controller('api/equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('kraken')
  async createOrUpdate(
    @Body() updateCatDto: EquipmentCategoryDto,
  ): Promise<EquipmentCategory> {
    return await this.equipmentService.updateEquipment(updateCatDto);
  }
}
