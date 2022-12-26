import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  commodities = 'http://localhost:3000/commodities';
  stores = 'http://localhost:3000/stores';
  transactions = 'http://localhost:3000/transactions';
  orders = 'http://localhost:3000/orders';
  constructor() {}
}
