import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl: string;
  constructor(public http: HttpClient,) {
    this.apiUrl = environment.apiUrl;

  }

  getProducts(): Observable<any>
  {
    let url = this.apiUrl + '/products/';
    return this.http.get<any>(url).pipe(map(response => {
      return response;
    }));
  }
  

}
