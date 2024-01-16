import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path: 'register',
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
