import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UrlsService } from '../../services/urls.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-pms-migrate',
  templateUrl: './pms-migrate.component.html',
  styleUrls: ['./pms-migrate.component.css'],
})
export class PmsMigrateComponent implements OnInit {
  constructor(
    private http: HttpService,
    private data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  migrateMedicines() {
    this.data.medicines.forEach((item: any) => {
      const toAdd = {
        medicine: item.medicine,
      };
      this.http
        .post(this.urls.migrateMedicines, toAdd)
        .subscribe((medicine) => {
          console.log(`added successfully: ${medicine.medicine}`);
        });
      // console.log(toAdd);
    });

    // with mock-database
  }
  migrateDispensed() {
    this.data.dispensed.forEach((item: any) => {
      const toAdd = {
        medications: item.medications,
        date: new Date(item.date),
      };
      this.http
        .post(this.urls.migrateDispensed, toAdd)
        .subscribe((dispensed) => {
          console.log(dispensed.medications);
        });
      // console.log(toAdd);
    });
  }
}
