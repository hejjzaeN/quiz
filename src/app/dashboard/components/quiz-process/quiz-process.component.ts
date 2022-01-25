import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

import { Question } from '../../interfaces/question.interface'

@Component({
  selector: 'app-quiz-process',
  templateUrl: './quiz-process.component.html',
  styleUrls: ['./quiz-process.component.css']
})
export class QuizProcessComponent implements OnInit {

  public allowNext: boolean = false
  public currentAnswer: string = ''
  public questionNo: number = 0
  public questions: Question[] = [
    {
      desc: 'Сколько типов данных в языке Javascript?',
      answers: [
        {
          desc: '6',
          isCorrect: false
        }, {
          desc: '7',
          isCorrect: false
        }, {
          desc: '8',
          isCorrect: false
        }, {
          desc: '9',
          isCorrect: true
        }
      ]
    }, {
      desc: 'Какой из этих типов НЕ является примитивом?',
      answers: [
        {
          desc: 'null',
          isCorrect: true
        }, {
          desc: 'number',
          isCorrect: false
        }, {
          desc: 'string',
          isCorrect: false
        }, {
          desc: 'undefined',
          isCorrect: false
        }
      ]
    }, {
      desc: 'Какая из команд добавляет элемент в массив?',
      answers: [
        {
          desc: 'push()',
          isCorrect: true
        }, {
          desc: 'shift()',
          isCorrect: false
        }, {
          desc: 'pop()',
          isCorrect: false
        }, {
          desc: 'fill()',
          isCorrect: false
        }
      ]
    }, {
      desc: 'Выберите выражение, которое вернет true',
      answers: [
        {
          desc: '"0" == 0',
          isCorrect: true
        }, {
          desc: 'undefined === void(0)',
          isCorrect: false
        }, {
          desc: 'null == BigInt(0)',
          isCorrect: false
        }, {
          desc: 'null === undefined',
          isCorrect: false
        }
      ]
    }, {
      desc: 'Какая из записей допустима?',
      answers: [
        {
          desc: 'let x = 1,000,000',
          isCorrect: false
        }, {
          desc: 'let x = 1:000:000',
          isCorrect: false
        }, {
          desc: 'let x = 1_000_000',
          isCorrect: true
        }, {
          desc: 'let x = 1 000 000',
          isCorrect: false
        }
      ]
    }
  ]

  public results: any[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickAnswer(event: any) {
    this.currentAnswer = event.target.value
    this.allowNext = true
  }

  onClickPrev() {
    this.questionNo -= 1

    this.results.pop()
    this.allowNext = false

    if (this.questionNo < 0) {
      this.router.navigate(['quiz-start'])
    }
  }

  onClickNext() {
    this.results.push({
      questionId: this.questionNo,
      answer: this.currentAnswer
    })

    this.questionNo += 1
    this.allowNext = false

    if (this.questions.length === this.questionNo) {
      this.router.navigate(['quiz-finish'], { state: { results: this.results, questions: this.questions } })
    }
  }
}
