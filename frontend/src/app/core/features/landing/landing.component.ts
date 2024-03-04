import { Component } from "@angular/core";
import { TrendingComponent } from "./trending/trending.component";
import { SuggestedCategoryShowcaseComponent } from "./suggested-category-showcase/suggested-category-showcase.component";
import { SuggestedStreamShowcaseComponent } from "./suggested-stream-showcase/suggested-stream-showcase.component";
import { NewReleasesShowcaseComponent } from "./new-releases-showcase/new-releases-showcase.component";
import { NavComponent } from "../../../shared/components/nav/nav.component";

@Component({
	selector: "app-landing",
	standalone: true,
	imports: [
		TrendingComponent,
		SuggestedCategoryShowcaseComponent,
		SuggestedStreamShowcaseComponent,
		NewReleasesShowcaseComponent,
		NavComponent
	],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss"
})
export class LandingComponent {}
