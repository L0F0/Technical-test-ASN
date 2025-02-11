import { Injectable } from '@angular/core';
import { DateFormat } from '../models/date';
import { Price } from '../models/prices';
import { Equipment } from '../models/equipmentCategory';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ImportDataService {
  constructor(private httpService: HttpService) {}

  equipment: Equipment[] = [];
  apiPath = '/api/equipment/';

  validationOccurenceByName(currentEquipment: Equipment): number {
    const index = this.equipment.findIndex(
      (equipment) => equipment.name === currentEquipment.name
    );
    return index;
  }

  formatImportData(dataEquipment: any) {
    let isEquipmentSection = false;
    for (let i = 1; i < dataEquipment.length; i++) {
      const currentEquipment = dataEquipment[i];
      if (!currentEquipment || currentEquipment.length === 0) {
        isEquipmentSection = true;
        continue;
      }

      let equipmentCategory: 'equipment' | 'product' = 'product';
      if (isEquipmentSection) {
        equipmentCategory = 'equipment';
      }

      const name = currentEquipment[0];
      const date = new DateFormat(currentEquipment[1]).formatToDate();
      const prices = new Price(currentEquipment[2].toString()).convertPrice();
      const isIndexEquipment = this.validationOccurenceByName(currentEquipment);
      if (isIndexEquipment < 0) {
        this.equipment.push(
          new Equipment(
            name,
            date,
            prices,
            currentEquipment[3],
            equipmentCategory
          )
        );
      } else {
        this.equipment[isIndexEquipment] = {
          name: name,
          updated_at: date,
          prices: prices,
          rate: currentEquipment[3],
          category: equipmentCategory,
        };
      }
    }
  }

  updateEquipment() {
    return this.httpService.post(this.apiPath + 'kraken', {
      equipment: this.equipment,
    });
  }
}
