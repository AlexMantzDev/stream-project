import { Component } from "@angular/core";
import { DbService } from "../../shared/services/db/db.service";
import { RegisterComponent } from "./register/register.component";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-auth",
	standalone: true,
	imports: [RegisterComponent, RouterOutlet],
	templateUrl: "./auth.component.html",
	styleUrl: "./auth.component.scss"
})
export class AuthComponent {
	constructor(public dbService: DbService) {}
}
