import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { routerModule } from './router/router.module';
import { DataServiceService } from './Services/data-service.service';
// import { LoginComponent } from './account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    // RegisterComponent,
    // LoginComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    routerModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
