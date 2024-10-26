import { Injectable } from '@angular/core';
import { Task } from '../Task';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // AWS server
  private apiUrl = 'http://3.92.158.55:5000';

  // local server
  // private apiUrl = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/task/allTasks`)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/task/delete/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/task/updateReminder/${task.id}`;
    return this.http.put<Task>(url, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/task/addTask`, task, httpOptions);
  }
}
