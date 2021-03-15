import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LandingPageComponent } from './components/landing-page/landingPage.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';
import { DataServiceService } from './services/data-service.service';
import { placeholderDirective } from './shared/placeholder/placeholder.directive';

@NgModule({
  declarations: [AppComponent, LandingPageComponent,placeholderDirective],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
    DataServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
