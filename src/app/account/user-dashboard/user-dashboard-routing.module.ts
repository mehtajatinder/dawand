import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDasboardComponent } from './user-dasboard.component';

// const routes: Routes = [];

const userdasboardroutes = [{ path: '', component: UserDasboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(userdasboardroutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
