import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-apps';
  view = 'onboard';
  viewToggled?: any;
  toggleView(viewname: any): void {
    this.view = viewname;
    this.viewToggled = viewname;
  }
}
