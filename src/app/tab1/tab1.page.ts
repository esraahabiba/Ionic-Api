import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  clc: Observable<any>;
  constructor(public httpClient: HttpClient) {
  /*  this.clc = this.httpClient.get('http://192.168.1.100:3000/calc/body');
    this.clc.subscribe(data => {
      console.log('First API : ', data);
    }
    )*/


  }
 /* httpNodeCors: {
    origin: "*",
    methods: "GET,PUT,POST,DELETE"
   }*/
num1 :Number ; 
num2 :Number ; 
  sendPostRequest(num1 , num2) {
    this.num1 = num1 
    this.num2 = num2 
   /* let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }*/
    let data ={
     "num1":num1 ,
   "num2":num2  
    }

    this.httpClient.get("http://192.168.1.100:3000/calc/body?num1="+num1+"&num2="+num2).subscribe(data => {console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
