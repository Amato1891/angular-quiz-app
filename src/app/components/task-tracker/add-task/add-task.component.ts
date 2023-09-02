import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';

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
