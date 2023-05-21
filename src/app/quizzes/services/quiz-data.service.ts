import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, Observable, tap } from 'rxjs';
import { difficulty } from '../models/difficulty.enum';
import { Category, quizProp } from '../models/category.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  categories: Category[] = []
  questions: Question[] = []

  selectedParams: quizProp = {
    amount: 5, category: 27, difficulty: difficulty.easy, type: 'multiple'
  }

  // params = new HttpParams()
  //   .set('amount', 5)
  //   .set('category', +this.selectedParams['category'] as number)
  //   .set('difficulty', this.selectedParams['difficulty']);

  constructor(private http: HttpClient,
  ) {

  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('https://opentdb.com/api_category.php')
      .pipe(map(response => response['trivia_categories']), map(data => this.categories = data),
        tap(() => console.log(this.categories)))
  }

  getQuestions(): Observable<Question[]> {
    let params = new HttpParams()
      .set('amount', 5)
      .set('category', this.selectedParams['category'])
      .set('difficulty', this.selectedParams['difficulty'])
      .set('type', this.selectedParams['type']);

    return this.http.get<Question[]>('https://opentdb.com/api.php', { params })

      .pipe(map(response => response['results']), map(data => this.questions = data),
        tap(() => {
          // console.log(this.questions)
        }))
  }
}
