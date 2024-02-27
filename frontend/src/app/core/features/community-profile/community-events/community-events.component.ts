import { Component } from "@angular/core";
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
	selector: "app-community-events",
	standalone: true,
	imports: [CalendarComponent],
	templateUrl: "./community-events.component.html",
	styleUrl: "./community-events.component.scss"
})
export class CommunityEventsComponent {}
