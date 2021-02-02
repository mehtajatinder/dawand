import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { RegisterComponent } from './register/register.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routerModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserDasboardComponent,
    LoginComponent,
    LandingPageComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    routerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
