import { Component } from "@angular/core";
import { DbService } from "../../../shared/services/db/db.service";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "../auth.component";

@Component({
	selector: "app-register",
	standalone: true,
	imports: [FormsModule],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.scss"
})
export class RegisterComponent {
	constructor(
		public dbService: DbService,
		public authComponent: AuthComponent
	) {}
}
