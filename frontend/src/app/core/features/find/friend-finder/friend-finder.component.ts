import { Component } from "@angular/core";
import { FriendFinderFormComponent } from "./friend-finder-form/friend-finder-form.component";

@Component({
	selector: "app-friend-finder",
	standalone: true,
	imports: [FriendFinderFormComponent],
	templateUrl: "./friend-finder.component.html",
	styleUrl: "./friend-finder.component.scss"
})
export class FriendFinderComponent {}
