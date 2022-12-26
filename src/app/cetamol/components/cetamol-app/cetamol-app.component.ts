import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cetamol-app',
  templateUrl: './cetamol-app.component.html',
  styleUrls: ['./cetamol-app.component.css'],
})
export class CetamolAppComponent implements OnInit {
  pmsNotToggled = true;

  view?: any;
  orderViewSelected?: any;
  host?: any;
  isOrderView = false;
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {
    // custom URLS
    this.http.get(this.urls.commodities).subscribe((commodities) => {
      // test
      console.log('operation successfully');

      console.log(commodities);
      // test
      // this.data.commodities = commodities.map((item: any) => {
      //   return { medicine: item.medicine };
      // });
      this.data.commodities = commodities;
    });
    this.http.get(this.urls.stores).subscribe((stores) => {
      console.log('fetched stores successfully');
      // this.data.stores = medicines.map((item: any) => {
      //   return { medicine: item.medicine };
      // });
      this.data.stores = stores;
    });
    this.http.get(this.urls.transactions).subscribe((transactions) => {
      console.log('fetched dispensed data successfully');
      // this.data.transactions = dispensed.map((item: any) => {
      //   return { medications: item.medications, date: item.date };
      // });
      this.data.transactions = transactions;
    });
    this.http.get(this.urls.orders).subscribe((orders) => {
      console.log('fetched orders data successfully');
      // this.data.transactions = dispensed.map((item: any) => {
      //   return { medications: item.medications, date: item.date };
      // });
      this.data.transactions = orders;
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
    console.log(this.view);
  }
  resetToggle() {
    this.pmsNotToggled = !this.pmsNotToggled;
    this.view = '';
  }
  toggleOrder(v: string) {
    this.isOrderView = this.isOrderView ? false : true;
    if (this.isOrderView) {
      this.orderViewSelected = v;
    } else {
      this.orderViewSelected = '';
    }
  }
  callTogglePms(f: NgForm, z: string) {
    this.host = f.value.store;
    this.togglePms(z);
  }
}
