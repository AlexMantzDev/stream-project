import { Component } from "@angular/core";
import { ManagementComponent } from "../management/management.component";

@Component({
	selector: "app-community-profile-settings",
	standalone: true,
	imports: [ManagementComponent],
	templateUrl: "./community-profile-settings.component.html",
	styleUrl: "./community-profile-settings.component.scss"
})
export class CommunityProfileSettingsComponent {}
