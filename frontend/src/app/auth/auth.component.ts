import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements AfterViewInit {
  @ViewChild("loginFormRef") loginFormRef: ElementRef;

  constructor() {}

  loginForm: HTMLFormElement;

  ngAfterViewInit(): void {
    this.loginForm = this.loginFormRef.nativeElement;
    this.loginForm.addEventListener("submit", onFormSubmit);
  }
  
  async function onFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const loginData = Object.fromEntries(data.entries());
  
    const options = {
      method: "POST",
      body: loginData,
    };
  
    try {
      const res = await fetch("http://mantztech.com/auth/login", options);
    } catch (err) {
      console.log(RangeError);
    }
  }
}
