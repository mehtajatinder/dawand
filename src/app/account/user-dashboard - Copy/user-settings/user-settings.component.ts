import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {
public userID = 1


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getUserdetailed();

  }

   getUserdetailed(){
      this.accountService.GetUserDetailedInfo(this.userID).subscribe( x =>{
        console.log(x)
      })
   }

}
