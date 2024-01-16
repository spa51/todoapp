import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { HomeChilOneComponent } from './home-chil-one/home-chil-one.component';
import { HomeChilTwoComponent } from './home-chil-two/home-chil-two.component';
import { validateSessionGuard } from '@core/guards/validate-session.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:() => import('@modules/auth/auth.module').then((m) =>  m.AuthModule)
    },
    {
        path:'task',
        loadChildren:() => import('@modules/task/task.module').then((m) =>  m.TaskModule),
        canActivate:[validateSessionGuard]
    },
    {
        path:'one',
        component:HomeChilOneComponent
    }
];