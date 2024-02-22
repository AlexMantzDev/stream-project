import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoginFormState } from '../lib/enums/auth.enums';
import { DbService } from '../db/db.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(public dbService: DbService) {}

  public formState = LoginFormState;
  public currentState = this.formState.login;
  changeFormState(state: LoginFormState) {
    this.currentState = state;
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
