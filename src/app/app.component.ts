import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellQuizComponent } from './shell-quiz/shell-quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellQuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
