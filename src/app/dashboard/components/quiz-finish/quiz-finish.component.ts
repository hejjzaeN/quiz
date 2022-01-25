import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-finish',
  templateUrl: './quiz-finish.component.html',
  styleUrls: ['./quiz-finish.component.css']
})
export class QuizFinishComponent implements OnInit {

  public score: number = 0
  public status: string = ''

  constructor(
    private router: Router
  ) {
    let answers = this.router.getCurrentNavigation()?.extras.state?.results
    let questions = this.router.getCurrentNavigation()?.extras.state?.questions

    questions.forEach((question: any, index: number) => {
      question.answers = question.answers.filter((answer: any) => answer.isCorrect)

      if (question.answers[0].desc === answers[index].answer) {
        this.score += 1
      }
    });

    this.score = this.score / questions.length * 100

    if (this.score === 100) {
      this.status = 'GOAT'
    } else if (this.score > 80) {
      this.status = 'Красава'
    } else if (this.score > 60) {
      this.status = 'Пойдет'
    } else if (this.score > 30) {
      this.status = 'Слабо'
    } else {
      this.status = 'ЛОШАРА'
    }
  }

  ngOnInit(): void {
  }

  onClickStart() {
    this.router.navigate(['quiz-process'])
  }

}
