import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private req:HttpClient) { }

  callerfor_API()
  {
   
    //return this.req.get('https://jsonplaceholder.typicode.com/posts')
    return this.req.get(' https://api.github.com/users')
  }
  
}
