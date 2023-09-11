import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/task-tracker/header/header.component';
import { ButtonComponent } from './components/task-tracker/button/button.component';
import { TasksComponent } from './components/task-tracker/tasks/tasks.component';
import { TaskItemComponent } from './components/task-tracker/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/task-tracker/add-task/add-task.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/task-tracker/footer/footer.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizHeaderComponent } from './components/quiz/quiz-header/quiz-header.component';
import { QuizButtonComponent } from './components/quiz/quiz-button/quiz-button.component';
import { QuizFormComponent } from './components/quiz/quiz-form/quiz-form.component';
import { QuizScorecardComponent } from './components/quiz/quiz-scorecard/quiz-scorecard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavComponent} from './components/nav/nav.component';
import { DatepickerComponent } from './components/task-tracker/datepicker/datepicker.component'

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent},
  {path: 'quiz', component: QuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    QuizComponent,
    QuizHeaderComponent,
    QuizButtonComponent,
    QuizFormComponent,
    QuizScorecardComponent,
    NavComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
