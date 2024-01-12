import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    {
    path:'', //TODO: http://localhost:4200/
    component: TestComponentComponent
},
{
    path:'test-route',
    component: TestComponentComponent
},
{
    path:'**',
    redirectTo:'/'
}
];
