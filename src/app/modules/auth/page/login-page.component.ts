import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,JsonPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm:FormGroup = new FormGroup({});

  constructor(){

  }
  ngOnInit():void{

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    })
  }

  sendCredentials():void{
    const body = this.loginForm.value;
    console.log(body)
  }
  

}
