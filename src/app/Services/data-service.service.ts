import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  public apiUrl ='http://localhost:3000'

  constructor(private httpClient: HttpClient) { }


  public RegisterUser(userData: any): any {
    return this.httpClient.post(
      this.apiUrl +`/registeruser`,
      userData
    )
  }

  public LoginUser(loginData:any):any{
    return this.httpClient.post(
      this.apiUrl+`/userLogin`,
      loginData
    )
  }

}
