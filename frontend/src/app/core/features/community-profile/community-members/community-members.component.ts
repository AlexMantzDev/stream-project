import { Component } from "@angular/core";
import { ManagementComponent } from "../management/management.component";

@Component({
	selector: "app-community-members",
	standalone: true,
	imports: [ManagementComponent],
	templateUrl: "./community-members.component.html",
	styleUrl: "./community-members.component.scss"
})
export class CommunityMembersComponent {}
