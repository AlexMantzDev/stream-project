import { Component } from "@angular/core";
import { LoginFormState } from "../../shared/lib/enums/auth-form.enums";
import { DbService } from "../../shared/services/db/db.service";
import { LoginComponent } from "./login/login.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { RegisterComponent } from "./register/register.component";

@Component({
	selector: "app-auth",
	standalone: true,
	imports: [LoginComponent, UserDetailsComponent, RegisterComponent],
	templateUrl: "./auth.component.html",
	styleUrl: "./auth.component.scss"
})
export class AuthComponent {
	public currentState: string = "LOGIN";

	constructor(public dbService: DbService) {}

	changeFormState(newState: string) {
		this.currentState = Object.values(LoginFormState).find(
			(possibleState) => possibleState === newState
		);
	}
}
