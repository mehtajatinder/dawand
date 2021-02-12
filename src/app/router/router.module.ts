import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landingPage.component';

const routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'register',
    loadChildren: () =>
      import('../account/register/register.module').then((m) => {
        return m.RegisterModule;
      }),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../account/login/login.module').then((m) => {
        return m.LoginModule;
      }),
  },
  {
    path: 'user-dashboard',
    loadChildren: () =>
      import('../account/user-dashboard/user-dashboard.module').then((m) => {
        return m.UserDashboardModule;
      }),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class routerModule {}
