export class Price {
  constructor(private price: string) {}

  convertPrice(): number[] {
    const convertedPrice: number[] = [];
    const splitPrice = this.price.split(';');
    for (let i = 0; i < splitPrice.length; i++) {
      const currentPrice = splitPrice[i];
      const priceConvertion = parseFloat(currentPrice.replace(',', '.'));
      convertedPrice.push(priceConvertion);
    }
    return convertedPrice;
  }
}
