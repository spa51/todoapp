import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { HomeChilOneComponent } from './home-chil-one/home-chil-one.component';
import { HomeChilTwoComponent } from './home-chil-two/home-chil-two.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'one',
                component:HomeChilOneComponent
            },
            {
                path:'two',
                component:HomeChilTwoComponent
            }
        ]
    }


//     {
//     path:'', //TODO: http://localhost:4200/
//     component: TestComponentComponent
// },
// {
//     path:'test-route',
//     component: TestComponentComponent
// },
// {
//     path:'**',
//     redirectTo:'/'
// }
];