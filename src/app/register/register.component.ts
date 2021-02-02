import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  register(regForm: NgForm) {
    this.httpClient
      .post('http://localhost:8080/register', regForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
