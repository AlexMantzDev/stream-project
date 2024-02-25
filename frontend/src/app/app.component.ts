import { Component } from "@angular/core";
import { LandingComponent } from "./core/features/landing/landing.component";
import { NavComponent } from "./shared/components/nav/nav.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [LandingComponent, NavComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "stream-project";
}
