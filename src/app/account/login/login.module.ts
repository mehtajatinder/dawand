import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.router.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, SharedModule, FormsModule],
})
export class LoginModule {}
