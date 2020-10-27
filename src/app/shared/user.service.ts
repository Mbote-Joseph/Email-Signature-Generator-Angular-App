import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Users } from '../Users.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  // HttpClient API get() method => Fetch Users list
  getUsers(): Observable<Users> {
    return this.http
      .get<Users>(this.apiURL + '/users')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Users
  getUser(id): Observable<Users> {
    return this.http
      .get<Users>(this.apiURL + '/users/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Users
  createUsers(Users): Observable<Users> {
    return this.http
      .post<Users>(
        this.apiURL + '/users',
        JSON.stringify(Users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Users
  updateUsers(id, Users): Observable<Users> {
    return this.http
      .put<Users>(
        this.apiURL + '/users/' + id,
        JSON.stringify(Users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete Users
  deleteUsers(id) {
    return this.http
      .delete<Users>(this.apiURL + '/Users/' + id, this.httpOptions)
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
