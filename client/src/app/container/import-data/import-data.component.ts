import { Component } from '@angular/core';
import { Equipment } from '../../core/models/equipmentCategory';
import { Price } from '../../core/models/prices';
import { DateFormat } from '../../core/models/date';
import { FilesService } from '../../core/services/files.service';
import { ImportDataService } from '../../core/services/import-data.service';

@Component({
  selector: 'app-import-data',
  imports: [],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.css',
})
export class ImportDataComponent {
  constructor(
    private fileService: FilesService,
    private importDataService: ImportDataService
  ) {}

  async onFileChange(event: any) {
    await this.fileService.readXLSX(event);
    this.importDataService.formatImportData(this.fileService.excelData);
  }

  onUpdateEquipment() {
    this.importDataService.updateEquipment().then((res: any) => {
      console.log(res);
    });
    return;
  }
}
