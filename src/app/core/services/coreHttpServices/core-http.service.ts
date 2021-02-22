import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {
private apiBaseURL: string = environment.apiBaseURL;
  constructor(private httpClient: HttpClient,) { }

    /**
   * HTTP GET Method
   * @param enpoint string
   */

  get(enpoint: string): Observable<any> {
    let headers = new HttpHeaders();
   // headers = headers.set('client_id', environment.client_id).set('client_secret', environment.client_secret);
     return this.httpClient.get(`${this.apiBaseURL}${enpoint}`, {headers: headers});
   }




     /**
   * HTTP POST Method
    * @param enpoint string
  * @param data any
   *
   */
  post(enpoint: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
  //  headers = headers.set('client_id', environment.client_id).set('client_secret', environment.client_secret).set( 'Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ");
    return this.httpClient.post(`${this.apiBaseURL}${enpoint}`, data, {headers: headers});
  }
}
