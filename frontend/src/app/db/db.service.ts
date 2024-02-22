import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce } from '../lib/utils/general.utils';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  checkUser(field: string, userInput: string) {
    const url = 'http://mantztech.com/auth/checkuser';
    debounce(() => {
      this.http
        .post(url, { field: field, param: userInput })
        .subscribe((res) => {
          console.log(res);
        });
    });
  }
}
