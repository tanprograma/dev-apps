import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TandbsUrlsService {
  topics = 'http://localhost:8000/topics';
  questions = 'http://localhost:8000/questions';
  formats = 'http://localhost:8000/formats';
  drugs = 'http://localhost:8000/drugs';
  drgclass = 'http://localhost:8000/drgclass';
  constructor() {}
}
