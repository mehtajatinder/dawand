import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  public userLogin = {
    loginId:'',
    loginPassword:''
  }
  public userData:any
  constructor(private dataservice: DataServiceService,private router: Router) {}



  ngOnInit() {
  }
  // login() {
  //   console.log(this.loginForm);
  // }
  loginUser(){
    console.log( this.userLogin);
    this.dataservice.LoginUser(this.userLogin).subscribe(m=>{
      if(m.isValid){
        console.log(m.message)
        console.log(m.result)
        this.router.navigate(['/user-dashboard'])
        this.userLogin.loginId='';
        this.userLogin.loginPassword=''
      }
    })
  }
}
