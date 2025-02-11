export class Equipment {
  constructor(
    public name: string,
    public updated_at: Date,
    public prices: number[],
    public rate: number,
    public category: 'product' | 'equipment'
  ) {}
}
