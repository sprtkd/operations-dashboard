import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  static readonly MAX_DELAY: number = 5;
  httpOptions = {};
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  fetchAllCustomers(url): Observable<any> {
    return this.http.get<any>(url, this.httpOptions)
      .pipe(
        catchError(this.errorHandlerService.handleError)
      );
  }

}
