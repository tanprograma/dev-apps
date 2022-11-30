import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TandbsAppComponent } from './tandbs/components/tandbs-app/tandbs-app.component';
import { TandbsAddTopicComponent } from './tandbs/components/tandbs-add-topic/tandbs-add-topic.component';
import { TandbsAddQuestionComponent } from './tandbs/components/tandbs-add-question/tandbs-add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    TandbsAppComponent,
    TandbsAddTopicComponent,
    TandbsAddQuestionComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
