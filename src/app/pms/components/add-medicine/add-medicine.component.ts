import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
})
export class AddMedicineComponent implements OnInit {
  message = false;
  nofunits: any = [];
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.name == '') return;
    const toAdd = {
      medicine: f.value.name.toLowerCase(),
    };
    f.reset();
    // with mock-database
    this.http.post(this.urls.migrateMedicines, toAdd).subscribe((medicine) => {
      console.log(medicine);
      const med = {
        medicine: medicine.medicine,
      };

      this.data.medicines.push(med);
    });
    // end of mockdb
    this.message = !this.message;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }

  createInputs(x: NgForm) {
    for (let i = 0; i < x.value.nofunits; i++) {
      this.nofunits.push({ uni: `uni${1 + i}`, quant: `quant${1 + i}` });
    }
    x.reset();
  }
  submit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.name == '') return;
    const units: any = this.nofunits.map((item: any) => {
      return {
        unit: f.value[item.uni].toLowerCase(),
        quantity: f.value[item.quant],
      };
    });
    const toAdd = {
      medicine: f.value.medd,
      units: units,
    };
    console.log(toAdd);
    f.reset();

    // with mock-database
    // this.http.post(this.urls.migrateMedicines, toAdd).subscribe((units) => {
    //   console.log(units);
    //   const itemmodified = {
    //     units: units.units,
    //   };

    // });
    // // end of mockdb
    this.message = !this.message;
    this.nofunits = [];
  }
}
