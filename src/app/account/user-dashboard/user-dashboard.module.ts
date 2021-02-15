import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDasboardComponent } from './user-dasboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [UserDasboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ]
})
export class UserDashboardModule { }
