import { Component } from "@angular/core";
import { AuthComponent } from "../auth.component";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss"
})
export class LoginComponent {
	constructor(public authComponent: AuthComponent) {}
}
