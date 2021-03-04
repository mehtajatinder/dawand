import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './components/account/account.service';
import { alertComponent } from './components/alert/alert.component';
import { placeholderDirective } from './shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(placeholderDirective) placeHolderRef: placeholderDirective;
  title = 'dasvand';
  isAuthenticated = false;
  private accountServiceSub!: Subscription;
  constructor(
    private accountService: AccountService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    this.accountService.AutoLogin();

    this.accountServiceSub = this.accountService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy() {
    this.accountServiceSub.unsubscribe();
  }

  LogoutUser() {
    this.accountService.LogoutUser();
  }

  showAlert(message: string) {
    const alertCompFactory = this.componentFactoryResolver.resolveComponentFactory(
      alertComponent
    );
    this.placeHolderRef.viewContainerRef.clear();
    const componentInstance = this.placeHolderRef.viewContainerRef.createComponent(
      alertCompFactory
    );
    componentInstance.instance.message = message;
    setTimeout(() => {
      this.placeHolderRef.viewContainerRef.clear();
    }, 2000);
  }
}
