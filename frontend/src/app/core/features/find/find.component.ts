import { Component } from "@angular/core";
import { FriendFinderFormComponent } from "./friend-finder/friend-finder-form/friend-finder-form.component";
import { CommunityFinderComponent } from "./community-finder/community-finder.component";

@Component({
	selector: "app-find",
	standalone: true,
	imports: [FriendFinderFormComponent, CommunityFinderComponent],
	templateUrl: "./find.component.html",
	styleUrl: "./find.component.scss"
})
export class FindComponent {}
