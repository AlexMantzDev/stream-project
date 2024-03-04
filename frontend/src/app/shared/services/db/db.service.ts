import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { debounce } from "../../lib/utils/debounce.utils";
import { environment } from "../../../../env/env";

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
		const url: string = `https://${environment.origin}/auth/checkuser`;
		const body: object = { field: field, param: userInput };
		this.debouncedHttp(url, body);
	}
}
