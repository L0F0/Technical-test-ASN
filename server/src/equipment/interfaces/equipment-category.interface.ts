export interface EquipmentCategory {
  name: string;
  updated_at: Date;
  prices: number[];
  rate: number;
  category: 'product' | 'equipment';
}
