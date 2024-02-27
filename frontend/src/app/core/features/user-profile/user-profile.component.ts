import { Component } from "@angular/core";
import { UserProfileSettingsComponent } from "./user-profile-settings/user-profile-settings.component";
import { InboxComponent } from "./inbox/inbox.component";
import { FeedComponent } from "./feed/feed.component";
import { WatchHistoryComponent } from "./watch-history/watch-history.component";
import { FriendsComponent } from "./friends/friends.component";
import { PreviousStreamsComponent } from "./previous-streams/previous-streams.component";

@Component({
	selector: "app-user-profile",
	standalone: true,
	imports: [
		UserProfileSettingsComponent,
		InboxComponent,
		FeedComponent,
		WatchHistoryComponent,
		FriendsComponent,
		PreviousStreamsComponent
	],
	templateUrl: "./user-profile.component.html",
	styleUrl: "./user-profile.component.scss"
})
export class ProfileComponent {}
