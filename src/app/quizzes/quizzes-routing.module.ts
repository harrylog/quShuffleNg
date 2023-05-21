import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { QuestionsDataResolver } from './services/questions-data.resolver';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuizPropertiesComponent } from './quiz-properties/quiz-properties.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent, resolve: { questions: QuestionsDataResolver } },
  { path: 'props', component: QuizPropertiesComponent },
  { path: 'quiz', component: QuestionListComponent, resolve: { questions: QuestionsDataResolver } },
  { path: 'results', component: ResultsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
