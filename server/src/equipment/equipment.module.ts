import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { EquipmentCategorySchema } from './schemas/equipment-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'EquipmentCategory', schema: EquipmentCategorySchema },
    ]),
  ],
  providers: [EquipmentService],
  controllers: [EquipmentController],
})
export class EquipmentModule {}
