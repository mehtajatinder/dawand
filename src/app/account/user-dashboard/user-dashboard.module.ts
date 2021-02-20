import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDasboardComponent } from './user-dasboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [UserDasboardComponent, UserPortfolioComponent, UserTransactionsComponent, UserSettingsComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ]
})
export class UserDashboardModule { }
