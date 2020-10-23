import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../Users.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  // HttpClient API get() method => Fetch Users list
  getUsers(): Observable<Users> {
    return this.http
      .get<Users>(this.apiURL + '/Users')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Users
  getUser(id): Observable<Users> {
    return this.http
      .get<Users>(this.apiURL + '/Users/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create Users
  createUsers(Users): Observable<Users> {
    return this.http
      .post<Users>(
        this.apiURL + '/Users',
        JSON.stringify(Users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Users
  updateUsers(id, Users): Observable<Users> {
    return this.http
      .put<Users>(
        this.apiURL + '/Users/' + id,
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
