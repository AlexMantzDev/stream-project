import { Component } from "@angular/core";
import { TrendingComponent } from "./trending/trending.component";

@Component({
	selector: "app-landing",
	standalone: true,
	imports: [TrendingComponent],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss"
})
export class LandingComponent {}
