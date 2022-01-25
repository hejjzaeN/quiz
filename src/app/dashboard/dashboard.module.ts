import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { QuizProcessComponent } from "./components/quiz-process/quiz-process.component";
import { QuizStartComponent } from "./components/quiz-start/quiz-start.component";
import { DashboardComponent } from "./dashboard.component";
import { QuizFinishComponent } from './components/quiz-finish/quiz-finish.component';

@NgModule({
  declarations: [
      DashboardComponent,
      QuizStartComponent,
      QuizProcessComponent,
      QuizFinishComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class DashboardModule { }
