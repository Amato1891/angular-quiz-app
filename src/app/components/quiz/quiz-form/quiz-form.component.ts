import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})

export class QuizFormComponent {
  @Input() selectedValue: string;
  @Output() selectedValueChanged = new EventEmitter<string>();
  @Output() formSubmitted = new EventEmitter<any>();
  displayError: boolean = false;
  selectedCategory: string = '';
  numberOfQuestions: number = 0;

  constructor(private quizService: QuizService) {}

  onSelectChange(event: any) {
    const selectedValue = event.target.value;
    this.selectedValue = selectedValue;
    this.selectedValueChanged.emit(selectedValue);
    this.quizService.setSelectedValue(selectedValue);
  }

  onSubmitForm() {
    if (!this.selectedCategory) return;
    if (!this.numberOfQuestions || this.numberOfQuestions > 10) {
      this.displayError = true;
      return;
    }
    this.displayError = false;
    const formData = {
      category: this.selectedCategory,
      numberOfQuestions: this.numberOfQuestions,
    };
    this.formSubmitted.emit(formData);
  }
}
