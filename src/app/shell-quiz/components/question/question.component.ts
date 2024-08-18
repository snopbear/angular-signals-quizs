import { Component, inject } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';
import { QuizService } from '../../services/quiz/quiz.service';

@Component({
  selector: 'quiz-question',
  standalone: true,
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  quizService = inject(QuizService);
}
