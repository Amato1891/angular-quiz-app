import { Component, Output, SimpleChanges, Input, EventEmitter } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css']
})
export class QuizHeaderComponent {
  @Input () quizCategory: string = '';
  questionsArray = [];
  questionCounter: number = 1;
  private answerToSubmit: string;
  private quizAnswersToCheck = [];
  isDataLoaded: boolean = false;
  @Output() quizSubmission = new EventEmitter<{ correctAnswers: number, totalQuestions: number }>();
  isQuizSubmitted: boolean = false;
  @Input() quizId: string | null = null;
  public lastClicked: number | null = null;

  constructor(private quizService: QuizService) {}

  // trigger get quiz method when there is a quiz id available
  ngOnChanges(changes: SimpleChanges) {
    if (changes['quizId'] && changes['quizId'].currentValue !== changes['quizId'].previousValue) {
      this.callGetQuizMethod(this.quizId);
    }
  }

  chosenAnswer(event: any, index: number) {
    console.log('event.target.innerText')
    console.log(event.target.innerText)
    this.answerToSubmit = event.target.innerText;
    this.lastClicked = index;
  };

  submitAndAddAnswerToArr() {
    if (!this.answerToSubmit) return;
    this.quizAnswersToCheck.push (
      {"id": this.questionsArray[this.questionCounter-1].id,
      "response": this.answerToSubmit.trim().replace('\n', '')}
      );
    this.answerToSubmit = null;
    this.questionCounter++;
    this.lastClicked = null;
    
    // if num of answers === num of questions then submit and grade the quiz
    if (this.quizAnswersToCheck.length === this.questionsArray.length) {
      // call service to grade quiz
      console.log('this.quizAnswersToCheck')
    console.log(this.quizAnswersToCheck)
      this.callSubmitQuizMethod(this.quizId, this.quizAnswersToCheck);
      this.isQuizSubmitted = true;
    }
  };

  // call get quiz method inside the quizService component
  callGetQuizMethod(quizId) {
    this.quizService.getQuizById(quizId)
      .subscribe(res => {
        this.questionsArray = res;
      });
}

// call submit quiz method inside the quizService component
callSubmitQuizMethod(quizId, body) {
  this.quizService.submitQuizAnswers(quizId, body)
    .subscribe(res => {
      this.quizSubmission.emit({
        correctAnswers: res,
        totalQuestions: this.questionsArray.length
      });
    });
}


  onDataLoaded() {
    this.isDataLoaded = true;
  }

  // UI CODE
  getQuestionTitle(): string {

    if (!this.questionsArray || this.questionsArray.length === 0) {
      return '';
    }

    if (this.questionsArray[this.questionCounter - 1].questionTitle) {
      this.onDataLoaded();

      return this.questionsArray[this.questionCounter - 1].questionTitle;
    } else {
      return 'Start a Quiz!';
    }
  }

  getOptionValue(index: number): string {
    if (!this.questionsArray || this.questionsArray.length === 0) {
      return '';
    }
  
    if (this.questionsArray[this.questionCounter - 1]?.hasOwnProperty(`option${index + 1}`)) {
      this.onDataLoaded();
      const optionKey = `option${index + 1}`;
      return this.questionsArray[this.questionCounter - 1][optionKey];
    } else {
      return '';
    }
  }
}
