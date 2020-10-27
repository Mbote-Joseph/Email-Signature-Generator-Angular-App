import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Social } from '../social.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  // Define API
  apiURL = 'http://emailsignaturegen.herokuapp.com/v1';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch Social list
  getSocials(): Observable<Social> {
    return this.http
      .get<Social>(this.apiURL + '/socials')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Social
  getSocial(id): Observable<Social> {
    return this.http
      .get<Social>(this.apiURL + '/socials/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Social
  createSocial(Social): Observable<Social> {
    return this.http
      .post<Social>(
        this.apiURL + '/socials',
        JSON.stringify(Social),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Social
  updateSocial(id, Social): Observable<Social> {
    return this.http
      .put<Social>(
        this.apiURL + '/socials/' + id,
        JSON.stringify(Social),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete Social
  deleteSocial(id) {
    return this.http
      .delete<Social>(this.apiURL + '/socials/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
