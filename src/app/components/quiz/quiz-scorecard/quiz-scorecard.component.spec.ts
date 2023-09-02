import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScorecardComponent } from './quiz-scorecard.component';

describe('QuizScorecardComponent', () => {
  let component: QuizScorecardComponent;
  let fixture: ComponentFixture<QuizScorecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizScorecardComponent]
    });
    fixture = TestBed.createComponent(QuizScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
