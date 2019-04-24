import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts()
  {
    let url="assets/mobile.json";
    return this.http.get(url);
  }
}
