import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderserviceService {

  constructor(private req:HttpClient) { }

  caller_for_jsonplaceholder_api()
  {
    //return this.req.get("https://jsonplaceholder.typicode.com/posts")
    return this.req.get("https://fakestoreapi.com/products")
  }
}
