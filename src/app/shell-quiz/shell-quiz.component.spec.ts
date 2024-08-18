import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellQuizComponent } from './shell-quiz.component';

describe('ShellQuizComponent', () => {
  let component: ShellQuizComponent;
  let fixture: ComponentFixture<ShellQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
