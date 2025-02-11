export class DateFormat {
  constructor(private date: string | number) {}

  formatToDate(): Date {
    let date: Date;

    if (typeof this.date === 'number') {
      date = new Date(1900, 0, this.date - 1);
    } else {
      const [day, month, year] = this.date.split('/').map(Number);
      date = new Date(year, month - 1, day);
    }

    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
