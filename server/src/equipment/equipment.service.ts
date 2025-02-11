import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EquipmentCategoryDto } from './dto/equipment-category.dto';
import { EquipmentCategory } from './interfaces/equipment-category.interface';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel('EquipmentCategory')
    private equipmentModel: Model<EquipmentCategory>,
  ) {}

  async updateEquipment(
    equipmentCategoryDto: EquipmentCategoryDto,
  ): Promise<EquipmentCategory> {
    const existingEquipment = await this.equipmentModel
      .findOne({ name: equipmentCategoryDto.name })
      .exec();

    if (existingEquipment) {
      existingEquipment.updated_at = new Date();
      existingEquipment.prices = equipmentCategoryDto.prices;
      existingEquipment.rate = equipmentCategoryDto.rate;
      existingEquipment.category = equipmentCategoryDto.category;
      return await existingEquipment.save();
    } else {
      const newEquipment = new this.equipmentModel(equipmentCategoryDto);
      return await newEquipment.save();
    }
  }
}
