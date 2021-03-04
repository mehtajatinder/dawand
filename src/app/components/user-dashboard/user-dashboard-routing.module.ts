import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDasboardComponent } from './user-dasboard.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';

// const routes: Routes = [];

const userdasboardroutes: Routes = [
  {
    path: '', component: UserDasboardComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'settings', component: UserSettingsComponent },
      { path: 'portfolio', component: UserPortfolioComponent },
      { path: 'transactions', component: UserTransactionsComponent },
    ]
  },


];




@NgModule({
  imports: [RouterModule.forChild(userdasboardroutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
