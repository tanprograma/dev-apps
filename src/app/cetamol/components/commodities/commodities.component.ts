import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css'],
})
export class CommoditiesComponent implements OnInit {
  message = false;
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.name == '' || f.value.name == null) return;
    const toAdd = {
      commodity: f.value.name.toLowerCase(),
    };
    f.reset();
    // with mock-database
    this.http.post(this.urls.commodities, toAdd).subscribe((commodity) => {
      console.log(commodity);
      // const med = {
      //   commodity: medicine.medicine,
      // };

      this.data.commodities.push(commodity);
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
