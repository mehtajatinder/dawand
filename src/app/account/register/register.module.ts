import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [FormsModule, SharedModule, RegisterRoutingModule],
})
export class RegisterModule {}
