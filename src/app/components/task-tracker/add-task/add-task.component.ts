import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  description: string;
  date: string;
  time: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor (private uiService: UiService) {
  this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  convertJsonDate(jsonDate: string): { year: number; month: number; day: number } {
    const date = new Date(jsonDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return { year, month, day };
  }

  onModelChanged(value: NgbDateStruct) {
      const formattedDate = this.formatNgbDate(value);
      this.date = formattedDate;
  }

  formatNgbDate(date: NgbDateStruct): string {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const monthName = monthNames[date.month - 1];
    const day = date.day;
    const year = date.year;
  
    return `${monthName} ${day}${this.getDaySuffix(day)}, ${year}`;
  }
  
  getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  

  onSubmit () {
    if(!this.description) return;
    if(!this.date) return;
    if(!this.time) return;

    const newTask = {
      description: this.description,
      date: this.date,
      reminder: this.reminder,
      time: this.time
    }
    this.onAddTask.emit(newTask);

    // clear old values
    this.description = '';
    this.date = '';
    this.time = '';
    this.reminder = false;
  }

}
