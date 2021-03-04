import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
