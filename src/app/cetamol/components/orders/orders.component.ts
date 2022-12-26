import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() props?: any;
  toggled = false;
  host?: any;
  message = false;
  multiple = false;
  nofmedicines: any = 0;
  nofcontrols: any = [];
  nofquantities: any = [];
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  createInputs(x: NgForm) {
    // setting value of nofmedicines
    this.nofmedicines += x.value.multiple;
    for (let i = this.nofcontrols.length; i < this.nofmedicines; i++) {
      this.nofcontrols.push({
        commodity: `comod${1 + i}`,
        quantity: `quant${1 + i}`,
      });
    }
    console.log(this.nofcontrols);
    x.reset();
  }
  createInput() {
    this.nofmedicines += 1;
    this.nofcontrols.push({
      commodity: `comod${this.nofcontrols.length + 1}`,
      quantity: `quant${this.nofcontrols.length + 1}`,
    });

    console.log(this.nofcontrols);
  }
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    let isNull = this.ValidateInput(f);
    console.log(isNull);
    if (isNull) {
      console.log('empty fields');
      return;
    }

    const commodities: any = this.nofcontrols.map((item: any) => {
      return {
        commodity: this.data.commodities.find((element: any) => {
          if (f.value[item.commodity].toLowerCase() == element.commodity) {
            return element;
          }
        }).id,
        quantity: f.value[item.quantity],
      };
    });
    // check for null value:
    const toAdd = {
      commodities,
      date: new Date().toLocaleDateString(),
      from: this.host,
      to: f.value.client,
      voucher: this.props.voucher,
    };

    f.reset();
    this.http.post(this.urls.orders, toAdd).subscribe((order) => {
      console.log(order);
      order.commodities = order.commodities.map((item: any) => {
        item.commodity = this.data.commodities.find((element: any) => {
          if (item.commodity == element.id) {
            return element;
          }
        }).commodity;
        return item;
      });
      this.data.commodities.push(order);
    });

    this.message = !this.message;
    this.nofcontrols = [];
  }
  ValidateInput(f: NgForm) {
    let isNull = false;
    const keys = Object.keys(f.value);
    for (let i = 0; i < keys.length; i++) {
      if (f.value[keys[i]] == null || f.value[keys[i]] == '') {
        isNull = !isNull;
        break;
      }
      // return;
    }
    return isNull;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
  toggleMultiple() {
    this.multiple = this.multiple ? false : true;
  }
  reset() {
    this.nofcontrols = [];
    this.multiple = false;
  }
  runToggled(x: string) {
    this.toggled = !this.toggled;
    if (this.toggled) {
      this.host = x;
    } else {
      this.host = null;
    }
  }
}
