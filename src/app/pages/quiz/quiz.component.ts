import { Component, Input, SimpleChanges } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  public formData: boolean = false;
  public quizId: string;
  public quizCategory: string;
  public isQuizSubmitted: boolean = false;
  submittedCorrectAnswers: number = 0;
  totalQuestions: number = 0;
  constructor(private quizService: QuizService) {}

  onResetFormDataChange(resetFormData: boolean) {
    console.log('resetting form data to false')
    this.formData = false;
  }
  
  onResetQuizSubmittedStatusChange(resetQuizSubmittedStatus: boolean) {
    console.log('resetting form data to false')
    this.isQuizSubmitted = false;
  }

  // get data from form submission and call create quiz method with it
  handleFormSubmission (formData: any) {
    if (formData) {
      this.formData = true;
      this.quizCategory = formData.category;
      this.callCreateQuizMethod(formData);
    }
  }

  onQuizSubmission(data: { correctAnswers: number, totalQuestions: number }) {
    this.submittedCorrectAnswers = data.correctAnswers;
    this.totalQuestions = data.totalQuestions;
    this.isQuizSubmitted = true;
  }

  // call quiz method inside the quizService component
  callCreateQuizMethod(formData) {
      this.quizService.createQuiz(formData)
        .subscribe(res => {
          this.quizId = res.id;
        });
  }
}
