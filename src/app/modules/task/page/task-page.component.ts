import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-task-page',
    standalone: true,
    templateUrl: './task-page.component.html',
    styleUrl: './task-page.component.css',
    imports: [HeaderComponent,ImgBrokenDirective,NgFor,NgIf]
})
export class TaskPageComponent {


    constructor(){}

    results:Array<string> =['hola']

    ngOnInit(){

    }

}
