import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthComponent } from "./core/auth/auth.component";
import { VideoPlayerComponent } from "./shared/components/video-player/video-player.component";
import { LandingComponent } from "./core/features/landing/landing.component";
import { NavComponent } from "./shared/components/nav/nav.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, AuthComponent, LandingComponent, NavComponent, VideoPlayerComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "stream-project";
}
