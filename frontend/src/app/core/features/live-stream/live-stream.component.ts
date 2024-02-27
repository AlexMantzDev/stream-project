import { Component } from "@angular/core";
import { VideoPlayerComponent } from "../../../shared/components/video-player/video-player.component";
import { ChatComponent } from "../../../shared/components/chat/chat.component";

@Component({
	selector: "app-live-stream",
	standalone: true,
	imports: [VideoPlayerComponent, ChatComponent],
	templateUrl: "./live-stream.component.html",
	styleUrl: "./live-stream.component.scss"
})
export class LiveStreamComponent {}
