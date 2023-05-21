import { Component, OnInit } from '@angular/core';
import { ResultsDataService } from '../services/results-data.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  questions: Question[] = []
  results: number[] = [];
  correctRes: number[] = []
  inCorrectRes: number[] = []

  correctnessArray: boolean[] = []
  correctAnswers: string[] = []
  constructor(private resDataService: ResultsDataService) {

  }

  ngOnInit(): void {
    this.questions = this.resDataService.getQus()
    this.results = this.resDataService.getSelectedRes()
    this.correctRes = this.resDataService.getCorrectRes()
    this.inCorrectRes = this.resDataService.getInCorrectRes()
    this.correctAnswers = this.resDataService.getCorrectAns()



    console.log(this.questions)

    console.log('this.results')
    console.log(this.results)

    console.log('this.correctRes')
    console.log(this.correctRes)

    console.log('this.inCorrectRes')
    console.log(this.inCorrectRes)

    this.correctnessArray = this.transformSelectedToBoolValues(this.results, this.correctRes, this.inCorrectRes)
    console.log(this.correctnessArray)
  }

  transformSelectedToBoolValues(results: number[] = [],
    correctRes: number[] = [],
    inCorrectRes: number[] = []
  ) {

    return results.map((val, ind) => {
      if (val == correctRes[ind]) {
        return true
      }
      else if (val == inCorrectRes[ind]) {
        return false
      }
    })

  }

}
