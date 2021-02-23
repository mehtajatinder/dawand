import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AccountResponseData {
  userId: number;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  public apiUrl ='http://localhost:8080'

  user = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient, private router: Router) {}

  RegisterUser(regForm: NgForm) {
    return this.httpClient.post<AccountResponseData>(
      'http://localhost:8080/register',
      regForm.value
    );
  }
  LoginInUser(loginForm: NgForm) {
    return this.httpClient
      .post<AccountResponseData>('http://localhost:8080/login', loginForm.value)
      .pipe(
        tap((resData) => {
          this.handleAuthentication(resData.token, resData.userId);
        })
      );
  }
  GetUserDetailedInfo(userid: any){
    return this.httpClient.get(
      this.apiUrl+ `/dashboard/${userid}`
    )
  }
  LogoutUser() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }
  AutoLogin() {
    const userData: {
      userID: number;
      _token: string;
    } = JSON.parse(localStorage.getItem('userData')!);

    if (!userData) {
      return;
    }
    const loadedUser = new User(userData._token, userData.userID);

    if (loadedUser.token) {
      return this.user.next(loadedUser);
    }
  }
  AutoLogout() {
    //setTimeout(() => {}, 0);
  }
  private handleAuthentication(token: string, userId: number) {
    if (token == undefined) {
      this.user.next(undefined);
    }
    const user = new User(token, userId);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
