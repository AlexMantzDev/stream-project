import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { VideoPlayerComponent } from "./shared/components/video-player/video-player.component";
import { LandingComponent } from "./core/features/landing/landing.component";
import { NavComponent } from "./shared/components/nav/nav.component";
import { LoginComponent } from "./core/auth/login/login.component";
import { RegisterComponent } from "./core/auth/register/register.component";
import { VerifyComponent } from "./core/auth/verify/verify.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		LoginComponent,
		RegisterComponent,
		VerifyComponent,
		LandingComponent,
		NavComponent,
		VideoPlayerComponent
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "stream-project";
}
