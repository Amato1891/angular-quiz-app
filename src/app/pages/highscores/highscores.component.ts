import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Highscores } from 'src/app/Highscores';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule]
})
export class HighscoresComponent implements AfterViewInit {
  displayedColumns: string[] = ['rank', 'name', 'category', 'score'];
  highScores: Highscores[];
  dataSource = new MatTableDataSource<Highscores>([]);

  constructor (private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getHighscores().subscribe((highScores) => {
      highScores.sort((a, b) => b.score - a.score);
      highScores.forEach((score, index) => {
        score.rank = index + 1;
      });
      this.highScores = highScores
      this.dataSource.data = this.highScores;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}