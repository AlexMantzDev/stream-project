import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RegisterComponent } from "../register/register.component";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [RouterLink, RegisterComponent],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss"
})
export class LoginComponent {
	constructor() {}
}
