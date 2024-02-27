import { Component } from "@angular/core";
import { VideoPlayerComponent } from "../../../shared/components/video-player/video-player.component";
import { ChatComponent } from "../../../shared/components/chat/chat.component";

@Component({
	selector: "app-live-group-stream",
	standalone: true,
	imports: [VideoPlayerComponent, ChatComponent],
	templateUrl: "./live-group-stream.component.html",
	styleUrl: "./live-group-stream.component.scss"
})
export class LiveGroupStreamComponent {}
