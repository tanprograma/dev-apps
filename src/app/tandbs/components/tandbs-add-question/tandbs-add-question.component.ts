import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
@Component({
  selector: 'tandbs-add-question',
  templateUrl: './tandbs-add-question.component.html',
  styleUrls: ['./tandbs-add-question.component.css'],
})
export class TandbsAddQuestionComponent implements OnInit {
  message = false;
  constructor(
    private http: HttpService,
    public data: TandbsDataService,
    private urls: TandbsUrlsService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.topic == '' || f.value.question == '') return;
    const toAdd = {
      topic: f.value.topic,
      id: this.data.questions.length + 1,
      question: f.value.question,
    };
    f.reset();
    this.http.post(this.urls.questions, toAdd).subscribe((question) => {
      console.log(question);
      this.data.questions.push(question);
    });
    this.message = !this.message;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
}
