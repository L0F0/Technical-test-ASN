import { Schema } from 'mongoose';

export const EquipmentCategorySchema = new Schema({
  name: { type: String, required: true },
  updated_at: { type: Date, required: true },
  prices: { type: [Number], required: true },
  rate: { type: Number, required: true },
  category: { type: String, enum: ['product', 'equipment'], required: true },
});
