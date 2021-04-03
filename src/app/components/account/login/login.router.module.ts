import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGaurd } from 'src/app/authGaurd/authGaurd.service';
import { LoginComponent } from './login.component';

const loginRoutes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
