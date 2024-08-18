import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { QuizService } from '../../services/quiz/quiz.service';

@Component({
  selector: 'quiz-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();
  quizService = inject(QuizService);

  letterMapping = ['A', 'B', 'C', 'D'];
  isCorrectAnswer = computed(
    () =>
      !!this.quizService.currentAnswer() &&
      this.answerText() === this.quizService.currentQuestion().correctAnswer
  );
  isWrongAnswer = computed(
    () =>
      this.answerText() === this.quizService.currentAnswer() &&
      this.quizService.currentAnswer() !==
        this.quizService.currentQuestion().correctAnswer
  );
}
