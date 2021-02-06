import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.router.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, SharedModule],
})
export class LoginModule {}
