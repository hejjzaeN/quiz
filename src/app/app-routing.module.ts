import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizProcessComponent } from './dashboard/components/quiz-process/quiz-process.component';
import { QuizStartComponent } from './dashboard/components/quiz-start/quiz-start.component';
import { QuizFinishComponent } from './dashboard/components/quiz-finish/quiz-finish.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'quiz-start', component: QuizStartComponent},
  {path: 'quiz-process', component: QuizProcessComponent},
  {path: 'quiz-finish', component: QuizFinishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
