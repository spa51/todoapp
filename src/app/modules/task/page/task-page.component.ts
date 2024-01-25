import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
    selector: 'app-task-page',
    standalone: true,
    templateUrl: './task-page.component.html',
    styleUrl: './task-page.component.css',
    imports: [HeaderComponent,NgSwitch,NgSwitchCase,NgSwitchDefault]
})
export class TaskPageComponent {

    case:number = 11;

    constructor(){}

    ngOnInit(){

    }

}
