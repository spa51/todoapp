import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-task-page',
    standalone: true,
    templateUrl: './task-page.component.html',
    styleUrl: './task-page.component.css',
    imports: [HeaderComponent,NgIf]
})
export class TaskPageComponent {

    showText = false;

    constructor(){}

    ngOnInit(){

    }

    changeText():void{
        this.showText = !this.showText;
    }

}
