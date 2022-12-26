import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-pms-records-dispensed',
  templateUrl: './pms-records-dispensed.component.html',
  styleUrls: ['./pms-records-dispensed.component.css'],
})
export class PmsRecordsDispensedComponent implements OnInit {
  form = false;
  dateVar?: any;
  date?: any;
  dispensedRecords?: any;
  numOfRecords: number = 0;
  tableData?: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {}
  toggleForm() {
    this.form = !this.form;
  }

  onSubmit(f: NgForm) {
    // run getDate
    this.date = new Date(f.value.date).toLocaleDateString();
    const medicineSumIndexes = this.data.medicines.map((item: any) => {
      return {
        medicine: item.medicine,
        quantities: 0,
      };
    });
    this.dispensedRecords = this.data.dispensed.filter((dispensed: any) => {
      return new Date(dispensed.date).toLocaleDateString() == this.date;
    });

    medicineSumIndexes.forEach((item: any) => {
      this.dispensedRecords.forEach((record: any) => {
        record.medications.forEach((medicine: any) => {
          if (item.medicine == medicine.medicine) {
            item.quantities += medicine.quantity;
          }
        });
      });
    });

    // console.log(this.data.dispensed);
    // console.log(this.dispensedRecords);
    // this is the list of reduced quantities

    this.tableData = medicineSumIndexes
      .filter((item: any) => {
        return item.quantities != 0;
      })
      .sort((a: any, b: any) => {
        if (a.medicine < b.medicine) {
          return -1;
        }
        if (a.medicine > b.medicine) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      .map((item: any, index: any) => {
        item.sn = index + 1;
        return item;
      });
    this.numOfRecords = this.tableData.length;
    console.log(
      `dispense records for: ${new Date(f.value.date).toLocaleDateString()}`
    );
    // console.log(this.dateVar);
  }
  getResult(day: any) {
    const x = new Date().toLocaleDateString();
    const y = new Date().toLocaleDateString();
    console.log(x < y);
    if (day == 0) {
      return new Date();
    }
    const today = new Date().toLocaleDateString();
    // const days = [];
    // for (let i = 0; i < day; i++) {
    //   const d = new Date(today).setDate(new Date(today).getDate() - i);
    //   console.log(new Date(d));
    //   days.push(d);
    // }
    const finalDate = new Date(today).setDate(
      new Date(today).getDate() - (day - 1)
    );
    console.log(new Date(finalDate).toLocaleDateString());
    return;
  }
  resSingleDate() {
    this.date = new Date().toLocaleDateString();
    const mappedMedicines = this.data.medicines.map((item: any) => {
      return {
        medicine: item.medicine,
        quantities: 0,
      };
    });
    this.dispensedRecords = this.data.dispensed.filter((dispensed: any) => {
      return new Date(dispensed.date).toLocaleDateString() == this.date;
    });

    mappedMedicines.forEach((item: any) => {
      this.dispensedRecords.forEach((record: any) => {
        record.medications.forEach((medicine: any) => {
          if (item.medicine == medicine.medicine) {
            item.quantities += medicine.quantity;
          }
        });
      });
    });

    // console.log(this.data.dispensed);
    // console.log(this.dispensedRecords);
    // this is the list of reduced quantities

    this.tableData = mappedMedicines
      .filter((item: any) => {
        return item.quantities != 0;
      })
      .sort((a: any, b: any) => {
        if (a.medicine < b.medicine) {
          return -1;
        }
        if (a.medicine > b.medicine) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      .map((item: any, index: any) => {
        item.sn = index + 1;
        return item;
      });
    this.numOfRecords = this.tableData.length;
    // console.log(
    //   `dispense records for: ${new Date(f.value.date).toLocaleDateString()}`
    // );
  }
  xyz(dias: any) {
    const medicineList = this.getMedicineList();
    const days = this.getAllDays(dias);
    const myItems: any = [];
    // console.log(medicineList.length);
    // console.log(days.length);
    days.forEach((day: any) => {
      this.data.dispensed.forEach((record: any) => {
        if (day == new Date(record.date).toLocaleDateString()) {
          myItems.push(record);
        }
      });
    });
    // console.log(myItems.length);

    // start of table data
    this.tableData = medicineList
      .map((item: any) => {
        myItems.forEach((record: any) => {
          record.medications.forEach((med: any) => {
            if (item.medicine == med.medicine) {
              item.quantities += med.quantity;
            }
          });
        });
        return item;
      })
      .filter((item: any) => {
        return item.quantities != 0;
      })
      .sort((a: any, b: any) => {
        if (a.medicine < b.medicine) {
          return -1;
        }
        if (a.medicine > b.medicine) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      .map((item: any, index: any) => {
        item.sn = index + 1;
        return item;
      });
    console.log(this.tableData.length);
    this.numOfRecords = this.tableData.length;
  }
  getAllDays(day: any) {
    const today = new Date().toLocaleDateString();
    if (day == 0) {
      return [today];
    }
    const days = [];
    for (let i = 0; i < day; i++) {
      const d = new Date(today).setDate(new Date(today).getDate() - i);
      // console.log(new Date(d));
      days.push(new Date(d).toLocaleDateString());
    }
    return days;
  }
  getLastDate(days: any) {
    if (days == 0) {
      return new Date().toLocaleDateString();
    }
    const today = new Date().toLocaleDateString();
    const lastDate = new Date(today).setDate(
      new Date(today).getDate() - (days - 1)
    );

    return new Date(lastDate).toLocaleDateString();
  }
  getMedicineList() {
    return this.data.medicines.map((item: any) => {
      return {
        medicine: item.medicine,
        quantities: 0,
      };
    });
  }
  getDispensedRecords(lastDate: any) {
    const now = new Date().toLocaleDateString();
    return this.data.dispensed.filter((dispensed: any) => {
      return new Date(dispensed.date).toLocaleDateString() >= lastDate;
    });
  }
  setTableData(rawData: any) {
    this.tableData = rawData
      .filter((item: any) => {
        return item.quantities != 0;
      })
      .sort((a: any, b: any) => {
        if (a.medicine < b.medicine) {
          return -1;
        }
        if (a.medicine > b.medicine) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      .map((item: any, index: any) => {
        item.sn = index + 1;
        return item;
      });
    this.numOfRecords = this.tableData.length;
  }
}
