import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TandbsAppComponent } from './tandbs/components/tandbs-app/tandbs-app.component';
import { TandbsAddTopicComponent } from './tandbs/components/tandbs-add-topic/tandbs-add-topic.component';
import { TandbsAddQuestionComponent } from './tandbs/components/tandbs-add-question/tandbs-add-question.component';
import { AddMcqComponent } from './tandbs/components/add-mcq/add-mcq.component';
import { AddMmqComponent } from './tandbs/components/add-mmq/add-mmq.component';
import { AddTfComponent } from './tandbs/components/add-tf/add-tf.component';
import { AddDqComponent } from './tandbs/components/add-dq/add-dq.component';

@NgModule({
  declarations: [
    AppComponent,
    TandbsAppComponent,
    TandbsAddTopicComponent,
    TandbsAddQuestionComponent,
    AddMcqComponent,
    AddMmqComponent,
    AddTfComponent,
    AddDqComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
