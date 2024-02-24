import { AfterViewInit } from "@angular/core";
import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import Hls from "hls.js";

@Component({
	selector: "app-watch",
	standalone: true,
	imports: [],
	templateUrl: "./watch.component.html",
	styleUrl: "./watch.component.scss"
})
export class WatchComponent implements AfterViewInit {
	@ViewChild("videoRef") videoRef: ElementRef;

	constructor() {}

	videoPlayer: HTMLMediaElement;
	videoSrc: string = "/hls/test.m3u8";

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
