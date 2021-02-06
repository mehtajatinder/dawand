import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const registerRouter = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(registerRouter)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
