import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { UserData } from '../../models/user-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private httpClient: HttpClient,
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {}

  register(regForm: NgForm) {
    if (!regForm.valid) {
      return;
    }
    this.accountService.RegisterUser(regForm).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
