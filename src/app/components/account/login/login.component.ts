import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  // message = '';
  public userLogin = {
    loginId: '',
    loginPassword: '',
  };
  constructor(
    private accountService: AccountService,
    private router: Router,
    private appcomponent: AppComponent
  ) {}

  ngOnInit() {}
  LoginUser() {
    this.accountService.LoginInUser(this.loginForm).subscribe(
      (response) => {
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        this.appcomponent.showAlert(error.error.message);
      }
    );
  }
}
