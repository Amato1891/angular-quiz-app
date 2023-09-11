import { Component, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  private _model: NgbDateStruct;
  private _date: { year: number; month: number };
  @Output() modelChanged = new EventEmitter<NgbDateStruct>();


  constructor(private calendar: NgbCalendar) {}

  set model(value: NgbDateStruct) {
    this._model = value;
    this.modelChanged.emit(value);
  }
  

  get model(): NgbDateStruct {
    return this._model;
  }

  set date(value: { year: number; month: number }) {
    this._date = value;
  }

  get date(): { year: number; month: number } {
    return this._date;
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
