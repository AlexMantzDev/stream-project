import { Component } from "@angular/core";
import { TrendingComponent } from "./trending/trending.component";
import { VideoPlayer } from "../../../shared/components/video-player/video-player.component";

@Component({
	selector: "app-landing",
	standalone: true,
	imports: [TrendingComponent, VideoPlayer],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss"
})
export class LandingComponent {}
