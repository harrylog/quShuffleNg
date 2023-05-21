import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { QuizDataService } from './quiz-data.service';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataResolver implements Resolve<Question[]> {
  constructor(private quizDataservice: QuizDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
    return this.quizDataservice.getQuestions();
  }
}
