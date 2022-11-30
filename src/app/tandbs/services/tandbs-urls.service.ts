import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TandbsUrlsService {
  topics = 'http://localhost:8000/topics';
  questions = 'http://localhost:8000/questions';
  constructor() {}
}
