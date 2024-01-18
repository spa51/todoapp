import { ReplaceSpacePipe } from './../../../../shared/pipes/replace-space.pipe';
import { Component} from '@angular/core';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    imports: [ReplaceSpacePipe]
})
export class LoginPageComponent {

    value = 'hola mundo'

    constructor(private replaceSpace:ReplaceSpacePipe){}

    ngOnInit(): void{
        this.value = this.replaceSpace.transform(this.value,'😊')
    }
    
}


