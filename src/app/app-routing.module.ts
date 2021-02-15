import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDasboardComponent } from './account/user-dashboard/user-dasboard.component';
import { LandingPageComponent } from './landing-page/landingPage.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./account/login/login.module').then((module) => {
        return module.LoginModule;
      }),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./account/register/register.module').then((module) => {
        return module.RegisterModule;
      }),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./account/user-dashboard/user-dashboard.module').then(
        (module) => {
          return module.UserDashboardModule;
        }
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
