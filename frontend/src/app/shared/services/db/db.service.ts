import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { debounce } from "../../lib/utils/debounce.utils";
import { env } from "../../../../env/env";

@Injectable({
	providedIn: "root"
})
export class DbService {
	private debouncedHttp: (url, body) => void;

	constructor(private http: HttpClient) {
		this.debouncedHttp = debounce((url, body) => {
			this.http.post(url, body).subscribe((res) => {
				console.log(res);
			});
		}, 2000);
	}

	checkUser(field: string, userInput: string) {
		let origin
		if(env.environment === "production") {
			origin = env.prod_origin
		} else {
			origin = env.dev_origin
		}
		const url: string = `https://${origin}/auth/checkuser`;
		const body: object = { field: field, param: userInput };
		this.debouncedHttp(url, body);
	}
}
