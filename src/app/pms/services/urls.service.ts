import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  medicines = 'http://localhost:5000/medicines';
  dispensed = 'http://localhost:5000/dispensed';
  migrateDispensed = 'http://localhost:5500/dispensed/';
  migrateMedicines = 'http://localhost:5500/medicines/';
  units = 'http://localhost:5500/units/';

  constructor() {}
}
