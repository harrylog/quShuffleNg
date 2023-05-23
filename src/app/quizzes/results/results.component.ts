import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ResultsDataService } from '../services/results-data.service';
import { Question } from '../models/question.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  questions: Question[] = [];
  results: number[] = [];
  correctRes: number[] = [];
  inCorrectRes: number[] = [];
  corrCnt: number = 0;
  inCorrCnt: number = 0;

  correctnessArray: boolean[] = [];
  correctAnswers: string[] = [];
  constructor(private resDataService: ResultsDataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.questions = this.resDataService.getQus();
    this.results = this.resDataService.getSelectedRes();
    this.correctRes = this.resDataService.getCorrectRes();
    this.inCorrectRes = this.resDataService.getInCorrectRes();
    this.correctAnswers = this.resDataService.getCorrectAns();

    console.log(this.questions);

    console.log('this.results');
    console.log(this.results);

    console.log('this.correctRes');
    console.log(this.correctRes);

    console.log('this.inCorrectRes');
    console.log(this.inCorrectRes);

    this.correctnessArray = this.transformSelectedToBoolValues(
      this.results,
      this.correctRes,
      this.inCorrectRes
    );
    console.log(this.correctnessArray);
    this.calcResAndDecideColor(this.corrCnt, this.inCorrCnt);
  }

  sanitizeData(data: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

  transformSelectedToBoolValues(
    results: number[] = [],
    correctRes: number[] = [],
    inCorrectRes: number[] = []
  ) {
    return results.map((val, ind) => {
      if (val == correctRes[ind]) {
        this.corrCnt++;
        return true;
      } else if (val == inCorrectRes[ind]) {
        this.inCorrCnt++;

        return false;
      } else {
        this.inCorrCnt++;

        return false;
      }
    });
  }

  calcResAndDecideColor(right: number, wrong: number) {
    const sum = right + wrong;
    console.log(sum);
    if (right <= 1) {
      return 'red';
    } else if (right <= 3) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}
