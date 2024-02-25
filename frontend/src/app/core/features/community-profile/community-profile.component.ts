import { Component } from "@angular/core";
import { CommunityProfileSettingsComponent } from "./community-profile-settings/community-profile-settings.component";
import { CommunityMembersComponent } from "./community-members/community-members.component";
import { CommunityEventsComponent } from "./community-events/community-events.component";

@Component({
	selector: "app-community-profile",
	standalone: true,
	imports: [
		CommunityProfileSettingsComponent,
		CommunityMembersComponent,
		CommunityEventsComponent
	],
	templateUrl: "./community-profile.component.html",
	styleUrl: "./community-profile.component.scss"
})
export class CommunityProfileComponent {}
