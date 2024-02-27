import { Component } from "@angular/core";
import { CommunityFinderFormComponent } from "./community-finder-form/community-finder-form.component";

@Component({
	selector: "app-community-finder",
	standalone: true,
	imports: [CommunityFinderFormComponent],
	templateUrl: "./community-finder.component.html",
	styleUrl: "./community-finder.component.scss"
})
export class CommunityFinderComponent {}
