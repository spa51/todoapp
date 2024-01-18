import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm:FormGroup = new FormGroup({});

  constructor(){}

  ngOnInit(): void{
    this.registerForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        name: new FormControl('',[Validators.required,Validators.minLength(3)]),
        password: new FormControl('',[Validators.required,Validators.minLength(3)]),
        passwordConfirm: new FormControl('',[Validators.required,Validators.minLength(3)])
      },
      {
        validators:passwordMatchValidator
      }
    )
  }

}
function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true};
}
