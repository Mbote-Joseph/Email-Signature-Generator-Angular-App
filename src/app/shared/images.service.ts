import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Images } from '../images.models';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  // Define API
  apiURL = 'http://localhost:3000';

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

  // HttpClient API get() method => Fetch Images list
  getImages(): Observable<Images> {
    return this.http
      .get<Images>(this.apiURL + '/Images')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Images
  getImage(id): Observable<Images> {
    return this.http
      .get<Images>(this.apiURL + '/Images/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Images
  createImages(Images): Observable<Images> {
    return this.http
      .post<Images>(
        this.apiURL + '/Images',
        JSON.stringify(Images),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Images
  updateImages(id, Images): Observable<Images> {
    return this.http
      .put<Images>(
        this.apiURL + '/Images/' + id,
        JSON.stringify(Images),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete Images
  deleteImages(id) {
    return this.http
      .delete<Images>(this.apiURL + '/Images/' + id, this.httpOptions)
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
