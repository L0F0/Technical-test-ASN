import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor() {}

  excelData: any[] = [];
  readXLSX(event: any) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        resolve(true);
      };
      reader.readAsBinaryString(file);
    });
  }
}
