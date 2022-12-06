import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-add-dq',
  templateUrl: './add-dq.component.html',
  styleUrls: ['./add-dq.component.css'],
})
export class AddDqComponent implements OnInit {
  @Input() topic?: any;
  @Input() format?: any;
  message = false;
  choices?: any;
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
      type: this.format,
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
