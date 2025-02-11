import { IsString, IsArray, IsNumber, IsEnum, IsDate } from 'class-validator';

export class EquipmentCategoryDto {
  @IsString()
  public name: string;

  @IsDate()
  public updated_at: Date;

  @IsArray()
  @IsNumber({}, { each: true })
  public prices: number[];

  @IsNumber()
  public rate: number;

  @IsEnum({ product: 'product', equipment: 'equipment' })
  public category: 'product' | 'equipment';
}
