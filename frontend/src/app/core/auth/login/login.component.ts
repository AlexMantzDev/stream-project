import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { RegisterComponent } from "../register/register.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { environment } from "../../../../env/env";

interface IUser {
	email: String;
	password: String;
}

@Component({
	selector: "app-login",
	standalone: true,
	imports: [ReactiveFormsModule, RouterLink, RegisterComponent],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss"
})
export class LoginComponent implements OnInit {
	loginUserForm: FormGroup;
	user: IUser = { email: undefined, password: undefined };

	constructor(public router: Router) {}

	ngOnInit(): void {
		this.loginUserForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null)
		});
	}

	async onSubmit() {
		this.user.email = this.loginUserForm.get("email").value;
		this.user.password = this.loginUserForm.get("password").value;

		try {
			await fetch(`https://${environment.origin}/auth/login`, {
				method: "POST",
				body: JSON.stringify(this.user)
			});
			this.router.navigate([""]);
		} catch (error) {
			console.log(error);
		}
	}
}
