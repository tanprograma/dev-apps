import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MigdataService {
  constructor() {}
  dispensed: any = {
    collection: [],
    url: 'http://localhost:5500/dispensed',
  };
  medicines: any = {
    collection: [],
    url: 'http://localhost:5500/medicines',
  };
}
