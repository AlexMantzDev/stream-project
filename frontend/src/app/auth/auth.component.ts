import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { LoginFormState } from "../shared/lib/enums/auth-form.enums";
import { DbService } from "../shared/services/db/db.service";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
	selector: "app-auth",
	standalone: true,
	imports: [FormsModule],
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

	onSubmit(form: NgForm) {
		console.log(form);
	}
}
