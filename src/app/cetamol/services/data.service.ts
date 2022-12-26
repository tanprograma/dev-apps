import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  commodities: any = [];
  stores: any = [];
  transactions: any = [];
  orders: any = [];
  constructor() {}
}
