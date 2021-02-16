import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

export interface AccountResponseData {
  userId: number;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  user = new Subject<User>();
  constructor(private httpClient: HttpClient) {}

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
  private handleAuthentication(token: string, userId: number) {
    if (token == undefined) {
      this.user.next(undefined);
    }
    const user = new User(token, userId);
    this.user.next(user);
  }
}
