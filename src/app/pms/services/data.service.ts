import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  medicines: any = [];
  dispensed: any = [];
  units: any = [];
  constructor() {}
}
