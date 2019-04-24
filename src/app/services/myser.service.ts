import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MyserService {

  constructor() { }
  abc()
  {
    let jsonData=[{'name':'anuj','age':23,'city':'noida'},
    {'name':'amit','age':33,'city':'delhi'}];
    return jsonData;
  }
}
