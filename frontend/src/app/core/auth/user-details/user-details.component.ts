import { Component } from "@angular/core";
import { AuthComponent } from "../auth.component";

@Component({
	selector: "app-user-details",
	standalone: true,
	imports: [],
	templateUrl: "./user-details.component.html",
	styleUrl: "./user-details.component.scss"
})
export class UserDetailsComponent {
	constructor(public authComponent: AuthComponent) {}
}
