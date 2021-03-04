import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [RegisterComponent],
  imports: [SharedModule, RegisterRoutingModule, BsDatepickerModule.forRoot()],
})
export class RegisterModule {}
