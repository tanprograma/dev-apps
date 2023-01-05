import { Component } from '@angular/core';
import { MigdataService } from './migrate/services/migdata.service';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-apps';
  view = 'onboard';
  view1 = 'tandbs';
  view2 = 'pms';
  view4 = 'migrate';
  // view3 = 'onboard';
  // view4 = 'onboard';
  viewToggled?: any;
  toggleView(viewname: any): void {
    this.view = viewname;
    // added to work with my data migarations to PMS-PRO
    if (viewname == 'migrate') {
      this.http.get(this.data.medicines.url).subscribe((res: any) => {
        this.data.medicines.collection = res;
        console.log(res);
      });
      this.http.get(this.data.dispensed.url).subscribe((res: any) => {
        this.data.dispensed.collection = res;
        console.log(res);
      });
    }
    // this.viewToggled = viewname;
  }
  constructor(private data: MigdataService, private http: HttpService) {}
}
