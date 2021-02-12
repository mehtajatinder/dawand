import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { UserData } from '../../models/user-model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private httpClient: HttpClient, private dataService : DataServiceService) {}

  public userData:any
  public isShowThanks:boolean
  ngOnInit(): void {

    this.userData = new UserData();
  }

  // register(regForm: NgForm) {
  //   console.log(regForm);
  //   this.httpClient
  //     .post('http://localhost:8080/register', regForm.value)
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }


  RegisterUSer(){
    this.dataService.RegisterUser(this.userData).subscribe(m => {
      if(m.isvalid){
        this.isShowThanks = true
        this.userData = ''
      }
    })

  }

}
