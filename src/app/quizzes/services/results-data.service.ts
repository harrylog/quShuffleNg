import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsDataService {


  selectedRes: number[] = []
  correctRes: number[] = []
  inCorrectRes: number[] = []
  questions: Question[] = []
  correctAnswers: string[] = []
  constructor() { }



  getSelectedRes() {
    return this.selectedRes = this.selectedRes;
  }

  setSelectedRe(data: number[]) {
    this.selectedRes = data
  }

  getCorrectRes() {

    return this.correctRes = this.correctRes;
  }

  setCorrectRes(data: number[]) {
    this.correctRes = data
  }


  getInCorrectRes() {
    return this.inCorrectRes = this.inCorrectRes;
  }

  setInCorrectRe(data: number[]) {
    this.inCorrectRes = data
  }

  getQus() {
    return this.questions
  }

  setQus(data: Question[]) {
    this.questions = data
  }

  setAllCorrectAns(data: string[]) {
    this.correctAnswers = data
  }

  getCorrectAns() {
    return this.correctAnswers
  }



}
