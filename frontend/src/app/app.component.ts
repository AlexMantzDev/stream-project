import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { VideoPlayer } from "./shared/components/video-player/video-player.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, AuthComponent, VideoPlayer],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "stream-project";
}
