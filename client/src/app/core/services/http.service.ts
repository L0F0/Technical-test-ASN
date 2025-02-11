import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as ENV } from '@env/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class HttpService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  httpParams = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  generalParams = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  setAuthorization(token: any) {
    this.httpParams = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
  }

  removeAuthorization() {
    this.httpParams = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  get(url: string, httpParams = this.httpParams): Promise<any> {
    return this.handleRequest(
      this.httpClient.get(ENV.serverURL + url, httpParams)
    );
  }

  post(url: string, body: any, httpParams = this.httpParams): Promise<any> {
    return this.handleRequest(
      this.httpClient.post(ENV.serverURL + url, body, httpParams)
    );
  }

  handleRequest(request: any) {
    return firstValueFrom(request)
      .then((res: any) => {
        if (ENV.showLogs && res.message) {
          console.log('Message : ' + res.message);
        }
        return res.data;
      })
      .catch((error) => {
        if (ENV.showLogs) {
          console.log(`Error ${error.status}\nMessage: ${error.message}`);
        }
        alert('Server Error');
        this.router.navigate(['/']);
      });
  }
}
