import { Injectable } from '@angular/core';
import { data1 } from './MockDataAgile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agile } from './agile';

@Injectable({
  providedIn: 'root'
})
export class AgileService {
  api = 'https://5f196c66e104860016baec9a.mockapi.io/user';

  products = data1;
  constructor(
    private http: HttpClient
  ) { 

    
  }
  getProducts(): Observable<Agile[]>{
    return this.http.get<Agile[]>(this.api);
  }
  // Search(keyword: string): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.api+ "?Search="+keyword);
  // }
 
  getProduct(id): Observable<Agile>{
    return this.http.get<Agile>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }

  Search(keyword: string): Observable<Agile[]>{
    return this.http.get<Agile[]>(this.api+ "?Search="+keyword);
  }
}
