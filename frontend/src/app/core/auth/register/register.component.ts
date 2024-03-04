import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

import { DbService } from "../../../shared/services/db/db.service";

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
	onSubmit() {
		console.log(this.registerUserForm);
		this.router.navigate(["verify"]);
	}
}
