import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-scorecard',
  templateUrl: './quiz-scorecard.component.html',
  styleUrls: ['./quiz-scorecard.component.css']
})
export class QuizScorecardComponent implements OnChanges {
  @Input() correctAnswers: number = 0;
  @Input() totalQuestions: number = 0;
  @Output() resetFormDataChange = new EventEmitter<boolean>();
  @Output() resetQuizSubmittedStatusChange = new EventEmitter<boolean>();
  resetFormData: boolean = false;
  resetQuizSubmittedStatus: boolean = false;
  percentageCorrect: number = 0;
  colorOfProgressBar: String = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['correctAnswers'] || changes['totalQuestions']) {
      this.calculatePercentage();
    }
  }

  private calculatePercentage() {
    if (this.totalQuestions !== 0) {
      this.percentageCorrect = Math.round((this.correctAnswers / this.totalQuestions) * 100);
      this.colorOfProgressBar = this.percentageCorrect > 70 ? 'success' : this.percentageCorrect > 50 ? 'warning' : 'danger';
    } else {
      this.percentageCorrect = 0;
    }
  }

  takeAnotherQuiz () {
    this.resetFormData = true;
    this.resetQuizSubmittedStatus = true;
    this.resetFormDataChange.emit(this.resetFormData);
    this.resetQuizSubmittedStatusChange.emit(this.resetQuizSubmittedStatus);
  }
}
