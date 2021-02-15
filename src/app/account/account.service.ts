import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs/operators';

export interface AccountResponseData {
  userId: number;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  RegisterUser(regForm: NgForm) {
    return this.httpClient
      .post<AccountResponseData>(
        'http://localhost:8080/register',
        regForm.value
      );
  }
  LoginInUser(loginForm: NgForm) {
    return this.httpClient.post<AccountResponseData>(
      'http://localhost:8080/login',
      loginForm.value
    );
  }
}
