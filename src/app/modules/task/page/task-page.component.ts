import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-task-page',
    standalone: true,
    templateUrl: './task-page.component.html',
    styleUrl: './task-page.component.css',
    imports: [HeaderComponent,ImgBrokenDirective,NgFor,NgIf,NgTemplateOutlet]
})
export class TaskPageComponent {


    constructor(){}

    listUser:Array<{id:string, name:string}> =[
        {
            id:'1',
            name:'Santiago'
        },
        {
            id:'2',
            name:'pedro'
        },
        {
            id:'3',
            name:'camilo'
        },
        {
            id:'4',
            name:'juan'
        },
        {
            id:'5',
            name:'fernando'
        },
    ]

    ngOnInit(){

    }

}
