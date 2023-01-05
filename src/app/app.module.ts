import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TandbsAppComponent } from './tandbs/components/tandbs-app/tandbs-app.component';
import { TandbsAddTopicComponent } from './tandbs/components/tandbs-add-topic/tandbs-add-topic.component';
import { TandbsAddQuestionComponent } from './tandbs/components/tandbs-add-question/tandbs-add-question.component';
import { TandbsAddDrugComponent } from './tandbs/components/tandbs-add-drug/tandbs-add-drug.component';
import { AddMcqComponent } from './tandbs/components/add-mcq/add-mcq.component';
import { AddMmqComponent } from './tandbs/components/add-mmq/add-mmq.component';
import { AddTfComponent } from './tandbs/components/add-tf/add-tf.component';
import { AddDqComponent } from './tandbs/components/add-dq/add-dq.component';
import { AddRxComponent } from './tandbs/components/add-rx/add-rx.component';
import { AddMedicineComponent } from './pms/components/add-medicine/add-medicine.component';
import { DispenseComponent } from './pms/components/dispense/dispense.component';
import { PmsAppComponent } from './pms/components/pms-app/pms-app.component';
import { PmsRecordsDispensedComponent } from './pms/components/pms-records-dispensed/pms-records-dispensed.component';
import { PmsMigrateComponent } from './pms/components/pms-migrate/pms-migrate.component';
import { CetamolAppComponent } from './cetamol/components/cetamol-app/cetamol-app.component';
import { CommoditiesComponent } from './cetamol/components/commodities/commodities.component';
import { StoresComponent } from './cetamol/components/stores/stores.component';
import { TransactionsComponent } from './cetamol/components/transactions/transactions.component';
import { OrdersComponent } from './cetamol/components/orders/orders.component';
import { MigrateComponent } from './migrate/migrate/migrate.component';

@NgModule({
  declarations: [
    AppComponent,
    TandbsAppComponent,
    TandbsAddTopicComponent,
    TandbsAddQuestionComponent,
    TandbsAddDrugComponent,
    AddMcqComponent,
    AddMmqComponent,
    AddTfComponent,
    AddDqComponent,
    AddRxComponent,
    AddMedicineComponent,
    DispenseComponent,
    PmsAppComponent,
    PmsRecordsDispensedComponent,
    PmsMigrateComponent,
    CetamolAppComponent,
    CommoditiesComponent,
    StoresComponent,
    TransactionsComponent,
    OrdersComponent,
    MigrateComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
