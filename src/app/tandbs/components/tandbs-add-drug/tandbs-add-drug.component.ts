import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { TandbsDataService } from '../../services/tandbs-data.service';
import { TandbsUrlsService } from '../../services/tandbs-urls.service';
@Component({
  selector: 'app-tandbs-add-drug',
  templateUrl: './tandbs-add-drug.component.html',
  styleUrls: ['./tandbs-add-drug.component.css'],
})
export class TandbsAddDrugComponent implements OnInit {
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
    if (f.value.clas == '' || f.value.drug == '') return;
    const toAdd = {
      drgclass: f.value.clas,
      id: this.data.drugs.length + 1,
      drug: f.value.drug,
    };
    f.reset();
    this.http.post(this.urls.drugs, toAdd).subscribe((drug) => {
      // console.log(question);
      this.data.drugs.push(drug);
    });
    this.message = !this.message;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
}
