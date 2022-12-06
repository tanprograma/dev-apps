import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-add-mcq',
  templateUrl: './add-mcq.component.html',
  styleUrls: ['./add-mcq.component.css'],
})
export class AddMcqComponent implements OnInit {
  @Input() topic?: any;
  @Input() format?: any;
  @Input() choices?: any;
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
    // let choices: any = [];
    const toAdd = {
      topic: f.value.topic,
      id: this.data.questions.length + 1,
      question: f.value.question,
      type: this.format,
      choices: this.choices.map((item: string) => {
        return { choice: f.value[item] };
      }),
    };

    console.log(toAdd);
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
