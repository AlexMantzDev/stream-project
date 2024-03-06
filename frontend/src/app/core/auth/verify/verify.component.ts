import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { env } from "../../../../env/env";

interface IUser {
	email: String;
	verificationToken: String;
}

@Component({
	selector: "app-verify",
	standalone: true,
	imports: [RouterLink],
	templateUrl: "./verify.component.html",
	styleUrl: "./verify.component.scss"
})
export class VerifyComponent implements OnInit {
	user: IUser = { email: undefined, verificationToken: undefined };

	constructor(
		public activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.verify();
	}

	async verify() {
		let origin;
		let protocol;
		if (env.environment === "production") {
			origin = env.prod_origin;
			protocol = `https`;
		} else {
			origin = env.dev_backend_origin;
			protocol = `http`;
		}

		this.activatedRoute.queryParams.subscribe((params) => {
			this.user.verificationToken = params["token"];
			this.user.email = params["email"];
		});

		try {
			await fetch(`${protocol}://${origin}/auth/verify`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(this.user)
			});
		} catch (error) {
			console.log(error);
		}
	}
}
