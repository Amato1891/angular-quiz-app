import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})


export class QuizService {

  // AWS server
  // private apiUrl = 'http://jim-amato-springboot-demo.us-east-1.elasticbeanstalk.com';

  // local server
  private apiUrl = 'http://localhost:8081';

  constructor(private http:HttpClient) { }

  // question methods
  getQuizByCategory(category: string): Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}/question/category/${category}`);
  }

  // quiz methods
  createQuiz(quizData: any): Observable<any> {
    return this.http.post<Object>(`${this.apiUrl}/quiz/create?category=${quizData.category}&numQ=${quizData.numberOfQuestions}`, httpOptions);
  }

  getQuizById(id: string): Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}/quiz/get/${id}`);
  }

  submitQuizAnswers(quizId: any, body: any): Observable<any> {
    console.log (body)
    return this.http.post<any>(`${this.apiUrl}/quiz/submit/${quizId}`, body, httpOptions);
  }

  private selectedValueSubject = new BehaviorSubject<string>('');

  selectedValue$ = this.selectedValueSubject.asObservable();

  setSelectedValue(value: string) {
    this.selectedValueSubject.next(value);
  }
}
