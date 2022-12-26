import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tandbs-app',
  templateUrl: './tandbs-app.component.html',
  styleUrls: ['./tandbs-app.component.css'],
})
export class TandbsAppComponent implements OnInit {
  tandbsNotToggled = true;
  topic?: any;
  format?: any;
  formatt: any = '';
  view?: any;

  choices: any = [];

  constructor(
    private http: HttpService,
    public data: TandbsDataService,
    private urls: TandbsUrlsService
  ) {}

  ngOnInit(): void {
    this.http.get(this.urls.topics).subscribe((topics) => {
      this.data.topics = topics;
    });
    this.http.get(this.urls.questions).subscribe((questions) => {
      this.data.questions = questions;
    });
    this.http.get(this.urls.formats).subscribe((formats) => {
      this.data.formats = formats;
      console.log(formats);
    });
    this.http.get(this.urls.drgclass).subscribe((drgclasses) => {
      this.data.drgclass = drgclasses;
      console.log(drgclasses);
    });
    this.http.get(this.urls.drugs).subscribe((drugs) => {
      this.data.drugs = drugs;
      console.log(drugs);
    });
  }
  onSubmit(f: NgForm) {
    this.topic = f.value.topic;
    this.format = f.value.format;
    f.value.choices;
    if (this.format == 'mcq' || this.format == 'mmq') {
      this.choices = [];
      for (let i = 0; i < parseInt(f.value.choices); i++) {
        this.choices.push(`choice${i + 1}`);
      }
      console.log(this.choices);
    }
    f.reset();
  }
  toggleTandbs(x: string) {
    this.tandbsNotToggled = !this.tandbsNotToggled;
    this.view = x;
  }
  resetToggle() {
    this.tandbsNotToggled = !this.tandbsNotToggled;
    this.view = '';
  }
}
