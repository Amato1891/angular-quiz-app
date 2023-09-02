import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.css']
})

export class QuizButtonComponent {
  @Input() selectedValue: string;
  @Output() selectedValueChanged = new EventEmitter<string>();

  selectedCategory: string = '';
  numberOfQuestions: number = 0;
  quizTitle: string = '';

  constructor(private quizService: QuizService) {}

  onSelectChange(event: any) {
    const selectedValue = event.target.value;
    this.selectedValue = selectedValue;
    this.selectedValueChanged.emit(selectedValue);
    this.quizService.setSelectedValue(selectedValue);
  }

  onSubmitForm() {
    // Handle form submission logic here
    console.log('Form submitted!', this.selectedCategory, this.numberOfQuestions, this.quizTitle);
  }
}
