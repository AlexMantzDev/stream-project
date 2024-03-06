import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

import { DbService } from "../../../shared/services/db/db.service";
import { env } from "../../../../env/env";

interface IUser {
	username: String;
	email: String;
	password1: String;
	password2: String;
}

@Component({
	selector: "app-register",
	standalone: true,
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.scss"
})
export class RegisterComponent {
	// Constants
	public registerUserForm: FormGroup;
	user: IUser = {
		username: undefined,
		email: undefined,
		password1: undefined,
		password2: undefined
	};

	// Constructor
	constructor(
		public dbService: DbService,
		public router: Router
	) {}

	// Lifecycle
	ngOnInit(): void {
		this.registerUserForm = new FormGroup({
			username: new FormControl(null, Validators.required),
			email: new FormControl(null, [Validators.required, Validators.email]),
			password1: new FormControl(null),
			password2: new FormControl(null)
		});
	}

	// Methods
	async onSubmit() {
		let origin;
		let protocol;
		if (env.environment === "production") {
			origin = env.prod_origin;
			protocol = `https`;
		} else {
			origin = env.dev_backend_origin;
			protocol = `http`;
		}
		this.user.username = this.registerUserForm.get("username").value;
		this.user.email = this.registerUserForm.get("email").value;
		this.user.password1 = this.registerUserForm.get("password1").value;
		this.user.password2 = this.registerUserForm.get("password2").value;

		try {
			await fetch(`${protocol}://${origin}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(this.user)
			});
		} catch (error) {
			console.log(error);
		}
		this.router.navigate(["email"]);
	}
}
