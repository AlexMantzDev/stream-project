import { AfterViewInit } from "@angular/core";
import { Component, ElementRef, ViewChild } from "@angular/core";
import Hls from "hls.js";

@Component({
	selector: "app-video-player",
	standalone: true,
	imports: [],
	templateUrl: "./video-player.component.html",
	styleUrl: "./video-player.component.scss"
})
export class VideoPlayerComponent implements AfterViewInit {
	@ViewChild("videoRef") videoRef: ElementRef;

	constructor() {}

	videoPlayer: HTMLMediaElement;
	videoSrc: string = "https://watch.mantztech.com/hls/test.m3u8";

	ngAfterViewInit(): void {
		this.videoPlayer = this.videoRef.nativeElement;
		this.createHlsStream();
	}

	createHlsStream() {
		if (Hls.isSupported()) {
			const hlsStream = new Hls();
			hlsStream.loadSource(this.videoSrc);
			hlsStream.attachMedia(this.videoPlayer);
		} else if (this.videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
			this.videoPlayer.src = this.videoSrc;
		}
	}
}
