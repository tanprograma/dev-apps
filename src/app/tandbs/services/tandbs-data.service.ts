import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TandbsDataService {
  topics: any = [];
  questions: any = [];
  formats: any = [];

  constructor() {}
}
