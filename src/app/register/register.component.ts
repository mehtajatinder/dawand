import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {UserData} from '../models/user-model' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  apiUrl ='http://localhost:3000'
  constructor(public httpClient: HttpClient) { 
   
  }

  public userData:any
  ngOnInit(): void {
    this.userData = new UserData()
 
    this.getNodedata().subscribe(x=>{
    console.log(x)
    })
  }

   getNodedata() {
    return this.httpClient.get(this.apiUrl)
  }

  // return this.httpClient.post(
  //   Appconfig.apiUrl + `/SMA/save/${adviserid}`,
  //   model

  // )
  RegisterUSer(){
    //console.log(this.userData)
    return this.httpClient.post(this.apiUrl+`/registeruser`, this.userData).subscribe(res=>{
      console.log("Response from api "+res)
    })

  }

}
