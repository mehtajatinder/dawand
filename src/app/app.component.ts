import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dasvand';
  isAuthenticated = false;
  private accountServiceSub!: Subscription;
  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.accountServiceSub = this.accountService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy() {
    this.accountServiceSub.unsubscribe();
  }
}
