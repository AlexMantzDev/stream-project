import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { WatchComponent } from "./watch/watch.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, AuthComponent, WatchComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "stream-project";
}
