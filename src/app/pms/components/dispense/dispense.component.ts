import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css'],
})
export class DispenseComponent implements OnInit {
  message = false;
  nofmedicines?: any;
  nofcontrols: any = [];
  nofquantities: any = [];
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  createInputs(x: NgForm) {
    for (let i = 0; i < x.value.name; i++) {
      this.nofcontrols.push({ med: `med${1 + i}`, quant: `quant${1 + i}` });
    }
    x.reset();
  }
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.name == '') return;
    const medications: any = this.nofcontrols.map((item: any) => {
      return {
        medicine: f.value[item.med].toLowerCase(),
        quantity: f.value[item.quant],
      };
    });
    const toAdd = {
      medications: medications,
    };
    console.log(toAdd);
    f.reset();

    // with mock-database
    this.http.post(this.urls.migrateDispensed, toAdd).subscribe((dispensed) => {
      console.log(dispensed);
      const itemmodified = {
        medications: dispensed.medications,
        date: dispensed.date,
      };

      this.data.dispensed.push(itemmodified);
    });
    // // end of mockdb
    this.message = !this.message;
    this.nofcontrols = [];
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
}
