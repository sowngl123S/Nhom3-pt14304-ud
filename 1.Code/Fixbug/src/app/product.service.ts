import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './Mockupdata';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e7c3e21a917d7001668302e.mockapi.io/products';

  products = data;
  constructor(
    private http: HttpClient

  ) { 
  
  }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  Search(keyword: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.api+ "?Search="+keyword);
  }
  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  addProduct(product){
    return this.http.post<Product>(`${this.api}`,product);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
    // console.log(this.products)
  }
  updateProduct(product){
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
 }
 deleteProduct(product){
  return this.http.delete<Product>(`${this.api}/${product.id}`);
}
}
