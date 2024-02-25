import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
	selector: "app-chat",
	standalone: true,
	imports: [],
	templateUrl: "./chat.component.html",
	styleUrl: "./chat.component.scss"
})
export class ChatComponent implements AfterViewInit {
	@ViewChild("chatRef") chatRef: ElementRef;

	chat: HTMLElement;

	constructor() {}

	ngAfterViewInit(): void {
		this.chat = this.chatRef.nativeElement;
	}
}
