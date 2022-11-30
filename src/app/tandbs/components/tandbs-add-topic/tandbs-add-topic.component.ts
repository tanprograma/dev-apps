import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
@Component({
  selector: 'tandbs-add-topic',
  templateUrl: './tandbs-add-topic.component.html',
  styleUrls: ['./tandbs-add-topic.component.css'],
})
export class TandbsAddTopicComponent implements OnInit {
  message = false;
  constructor(
    private http: HttpService,
    private data: TandbsDataService,
    private urls: TandbsUrlsService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.name == '') return;
    const toAdd = {
      name: f.value.name,
      id: this.data.topics.length + 1,
      questions: [],
    };
    f.reset();
    // with mock-database
    this.http.post(this.urls.topics, toAdd).subscribe((topic) => {
      console.log(topic);
      this.data.topics.push(topic);
    });
    // end of mockdb
    this.message = !this.message;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
}
