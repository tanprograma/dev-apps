import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
@Component({
  selector: 'app-tandbs-app',
  templateUrl: './tandbs-app.component.html',
  styleUrls: ['./tandbs-app.component.css'],
})
export class TandbsAppComponent implements OnInit {
  constructor(
    private http: HttpService,
    private data: TandbsDataService,
    private urls: TandbsUrlsService
  ) {}

  ngOnInit(): void {
    this.http.get(this.urls.topics).subscribe((topics) => {
      this.data.topics = topics;
    });
    this.http.get(this.urls.questions).subscribe((questions) => {
      this.data.questions = questions;
    });
  }
}
