import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { QuizDataService } from '../services/quiz-data.service';
import { difficulty } from '../models/difficulty.enum';

@Component({
  selector: 'app-quiz-properties',
  templateUrl: './quiz-properties.component.html',
  styleUrls: ['./quiz-properties.component.css']
})



export class QuizPropertiesComponent implements OnInit {


  constructor(public fb: FormBuilder, private quizDataservice: QuizDataService) { }

  categories: Category[]=[]
  difficultyEnum = difficulty
  paramsToCreateQuiz = {}
  ngOnInit(): void {
    this.quizDataservice.getCategories()
      .subscribe(categories => this.categories = categories)
  }

  isSubmitted = false;


  questionsProps = this.fb.group({
    categoryName: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],

  },
  );

  changeCategory(e: any) {
    // console.log(e.target.value);
    let selectedCategory = e.target.value//.split(' ')
    let selectedCategoryInd = selectedCategory.split(' ')[0]
    this.quizDataservice.selectedParams['category'] = selectedCategoryInd

    // console.log(+selectedCategoryInd)
    this.categoryName?.setValue(selectedCategory);
  }
  get categoryName() {
    return this.questionsProps.get('categoryName');
  }

  changeDifficulty(e: any) {
    // console.log(e.target.value);
    this.difficulty?.setValue(e.target.value);
    let selectedDiff = e.target.value
    this.quizDataservice.selectedParams['difficulty'] = selectedDiff

  }
  get difficulty() {
    return this.questionsProps.get('difficulty');
  }


  onSubmit(): void {
    // console.log(this.questionsProps.value);
    console.log(this.quizDataservice.selectedParams['category']);
    console.log(this.quizDataservice.selectedParams['difficulty']);
    this.quizDataservice.getQuestions()
    this.isSubmitted = true;
    if (!this.questionsProps.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.questionsProps.value));
    }
  }


}

