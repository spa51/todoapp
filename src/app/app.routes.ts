import { Component } from '@angular/core';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'auth', //TODO: http://localhost:4200/auth
        loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path:'task', //TODO: http://localhost:4200/task
        loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule)
    }

];