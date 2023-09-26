import { Component } from '@angular/core';
import { AppService } from './app.service';
import { JsonplaceholderserviceService } from './jsonplaceholderservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'angularservicedemo';
  apidata:any=[]
  //constructor(private serviceProvider:AppService){}
  constructor(private json_service:JsonplaceholderserviceService){}

  ngOnInit()
  {
    //this.call_caller();
    this.call_jsonplace();
  }
  call_caller()
  {
    //this.serviceProvider.callerfor_API().subscribe((res)=>{this.apidata=res})
}

call_jsonplace()
{
 this.json_service.caller_for_jsonplaceholder_api().subscribe((result)=>{this.apidata=result})
}

}