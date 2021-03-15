import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UserDasboardComponent } from './account/user-dashboard/user-dasboard.component';
import { authGaurd } from '../authGaurd/authGaurd.service';
import { canDeactivateGaurd } from '../authGaurd/canDeactivateGaurd.service';
import { LandingPageComponent } from '../components/landing-page/landingPage.component';
import { paymentComponent } from '../components/payment/payment.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('../components/account/login/login.module').then((module) => {
        return module.LoginModule;
      }),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../components/account/register/register.module').then((module) => {
        return module.RegisterModule;
      }),
  },
  {
    path: 'dashboard',
    canLoad: [authGaurd],
    loadChildren: () =>
      import('../components/user-dashboard/user-dashboard.module').then(
        (module) => {
          return module.UserDashboardModule;
        }
      ),
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'payment',
    component: paymentComponent,
    canDeactivate: [canDeactivateGaurd],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
