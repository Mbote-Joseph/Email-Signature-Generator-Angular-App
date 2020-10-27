import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Templates } from '../templates.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
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

  // HttpClient API get() method => Fetch Templates list
  getTemplates(): Observable<Templates> {
    return this.http
      .get<Templates>(this.apiURL + '/templates')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Templates
  getTemplate(id): Observable<Templates> {
    return this.http
      .get<Templates>(this.apiURL + '/templates/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Templates
  createTemplates(Templates): Observable<Templates> {
    return this.http
      .post<Templates>(
        this.apiURL + '/templates',
        JSON.stringify(Templates),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Templates
  updateTemplates(id, Templates): Observable<Templates> {
    return this.http
      .put<Templates>(
        this.apiURL + '/templates/' + id,
        JSON.stringify(Templates),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete Templates
  deleteTemplates(id) {
    return this.http
      .delete<Templates>(this.apiURL + '/templates/' + id, this.httpOptions)
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
