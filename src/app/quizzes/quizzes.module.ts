import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizPropertiesComponent } from './quiz-properties/quiz-properties.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizPropertiesComponent,
    QuestionListComponent, ResultsComponent,
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class QuizzesModule { }
