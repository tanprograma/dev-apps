import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-pms-app',
  templateUrl: './pms-app.component.html',
  styleUrls: ['./pms-app.component.css'],
})
export class PmsAppComponent implements OnInit {
  pmsNotToggled = true;

  view?: any;

  constructor(
    private http: HttpService,
    private data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {
    // worked on the mock db
    // this.http.get(this.urls.medicines).subscribe((medicines) => {
    //   this.data.medicines = medicines;
    // });
    // this.http.get(this.urls.dispensed).subscribe((dispensed) => {
    //   this.data.dispensed = dispensed;
    // });
    // worked on the mock db
    // this.http.get(this.urls.migrateMedicines).subscribe((medicines) => {
    //   console.log('fetched medicines successfully');
    //   this.data.medicines = medicines.map((item: any) => {
    //     return { medicine: item.medicine };
    //   });
    // });
    // this.http.get(this.urls.migrateDispensed).subscribe((dispensed) => {
    //   console.log('fetched dispensed data successfully');
    //   this.data.dispensed = dispensed.map((item: any) => {
    //     return { medications: item.medications, date: item.date };
    //   });
    // });
    // custom URLS
    this.http.get(this.urls.migrateMedicines).subscribe((medicines) => {
      console.log('fetched medicines successfully');
      this.data.medicines = medicines.map((item: any) => {
        return { medicine: item.medicine };
      });
    });
    this.http.get(this.urls.migrateDispensed).subscribe((dispensed) => {
      console.log('fetched dispensed data successfully');
      this.data.dispensed = dispensed.map((item: any) => {
        return { medications: item.medications, date: item.date };
      });
    });
    this.http.get(this.urls.units).subscribe((units) => {
      console.log('fetched dispensed data successfully');
      this.data.units = units.map((item: any) => {
        return { unit: item.unit };
      });
    });
  }
  // onSubmit(f: NgForm) {
  //   this.topic = f.value.topic;
  //   this.format = f.value.format;
  //   f.value.choices;
  //   if (this.format == 'mcq' || this.format == 'mmq') {
  //     this.choices = [];
  //     for (let i = 0; i < parseInt(f.value.choices); i++) {
  //       this.choices.push(`choice${i + 1}`);
  //     }
  //     console.log(this.choices);
  //   }
  //   f.reset();
  // }
  togglePms(x: string) {
    this.pmsNotToggled = !this.pmsNotToggled;
    this.view = x;
  }
  resetToggle() {
    this.pmsNotToggled = !this.pmsNotToggled;
    this.view = '';
  }
}
