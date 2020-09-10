import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string;
  constructor(public http: HttpClient,) {
    this.apiUrl = environment.apiUrl;

  }


  putOrders(data): Observable<any>
  {
    return this.http.post<any>(this.apiUrl + '/orders/', data).pipe(map(response => {
      return response;
    }));
  }


}
