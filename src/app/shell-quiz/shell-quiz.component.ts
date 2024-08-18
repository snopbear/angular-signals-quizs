import { Component, inject, OnInit } from '@angular/core';
import { QuestionComponent } from './components/question/question.component';
import { QuizService } from './services/quiz/quiz.service';

@Component({
  selector: 'shell-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './shell-quiz.component.html',
  styleUrl: './shell-quiz.component.scss',
})
export class ShellQuizComponent implements OnInit {
  quizService = inject(QuizService);

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe({
      next: (questions) => {
        this.quizService.questions.set(questions);
      },
      error: (err) => {
        this.quizService.error.set(err.message);
      },
    });
  }
}
