import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    //console.error("Error handler called")
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error);
      return throwError(
        'Something bad happened; please try again later.');
    } else {
      let errMsg: String;

      if (error.status == 403) {
        errMsg = "Invalid Credentials."
      }
      else {
        errMsg = "Bad Request";
      }
      return throwError(errMsg);
    }
  };
}
