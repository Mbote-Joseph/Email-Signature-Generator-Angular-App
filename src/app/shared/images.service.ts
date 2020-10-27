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
  apiURL = 'http://emailsignaturegen.herokuapp.com/v1';
  token;
  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  public getAuthToken() {
    // use admin credentials shared with you in the channel
    // NOTE: DO NOT include this part during commits. Store
    // the values in an untracked file then reference them here.
    var credentials = {
      username: 'test@cmshosting.xyz',
      password: 'cmshosting.xyz',
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.token = this.http
      .post(`${this.apiURL}/tokens`, credentials, httpOptions)
      .subscribe((data) => {
        // console.log(data['access_token']);
        this.token = data['access_token'];
      });

    return this.token;
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  // HttpClient API get() method => Fetch Images list
  getImages(): Observable<Images> {
    return this.http
      .get<Images>(this.apiURL + '/users/{id}/images')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Images
  getImage(id): Observable<Images> {
    return this.http
      .get<Images>(this.apiURL + '/users/{id}/images/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Images
  createImages(Images): Observable<Images> {
    return this.http
      .post<Images>(
        this.apiURL + '/users/{id}/images',
        JSON.stringify(Images),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Images
  updateImages(id, Images): Observable<Images> {
    return this.http
      .put<Images>(
        this.apiURL + '/users/{id}/images/' + id,
        JSON.stringify(Images),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete Images
  deleteImages(id) {
    return this.http
      .delete<Images>(
        this.apiURL + '/users/{id}/images/' + id,
        this.httpOptions
      )
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
