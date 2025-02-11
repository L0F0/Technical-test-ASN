import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  getSSOUser() {
    return this.httpService.getUrl('/.auth/me').then((user) => {
      return user[0];
    });
    // if (environment.production) {
    // } else {
    //   return Promise.resolve({ accessToken: null, email: null });
    // }
  }

  isAuthenticated() {
    if (this.token === null) {
      return this.verifyToken();
    } else {
      return Promise.resolve(true);
    }
  }
}
