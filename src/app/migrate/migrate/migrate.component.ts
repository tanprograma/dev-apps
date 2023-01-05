import { Component, OnInit } from '@angular/core';
import { MigdataService } from '../services/migdata.service';
import { HttpService } from 'src/app/services/http.service';
import { Migr } from '../classes/migr';
@Component({
  selector: 'app-migrate',
  templateUrl: './migrate.component.html',
  styleUrls: ['./migrate.component.css'],
})
export class MigrateComponent implements OnInit {
  constructor(public data: MigdataService, private http: HttpService) {}
  selection: any = 'general';
  medicine: any = new Migr('medicine', () => {
    return this.data.dispensed.collection.length;
  });

  dispensed: any = new Migr('dispensed', () => {
    return this.data.dispensed.collection.length;
  });
  migrates: any = [this.medicine, this.dispensed];
  ngOnInit(): void {
    console.log(this.data.dispensed.collection.length);
  }
  migrateMedicines(): any {
    const medicines: any = this.data.medicines.collection.map((item: any) => {
      return item.medicine;
    });
    console.log(medicines);
    return medicines;
  }
  migrateDispensed(): any {
    const dispensed: any = this.data.dispensed.collection.map((item: any) => {
      item.medications = item.medications.map((med: any) => {
        return {
          commodity: med.medicine,
          quantity: med.quantity,
        };
      });
      return {
        client: 'mainclinic',
        date: item.date,
        commodities: item.medications,
      };
    });
    console.log(dispensed);
    return dispensed;
  }
}
