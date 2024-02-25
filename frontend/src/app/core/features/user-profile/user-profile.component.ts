import { Component } from "@angular/core";
import { UserProfileSettingsComponent } from "./user-profile-settings/user-profile-settings.component";
import { InboxComponent } from "./inbox/inbox.component";
import { SuggestedComponent } from "./suggested/suggested.component";
import { FeedComponent } from "./feed/feed.component";
import { WatchHistoryComponent } from "./watch-history/watch-history.component";
import { AnalyticsComponent } from "../../shared/components/analytics/analytics.component";
import { FriendsComponent } from "./friends/friends.component";

@Component({
	selector: "app-user-profile",
	standalone: true,
	imports: [
		UserProfileSettingsComponent,
		InboxComponent,
		SuggestedComponent,
		FeedComponent,
		WatchHistoryComponent,
		AnalyticsComponent,
		FriendsComponent
	],
	templateUrl: "./user-profile.component.html",
	styleUrl: "./user-profile.component.scss"
})
export class ProfileComponent {}
