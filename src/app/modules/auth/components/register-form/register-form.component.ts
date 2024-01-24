import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthTestService } from '@modules/auth/services/auth-test.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  registerForm:FormGroup = new FormGroup({});

  constructor(private authservice:AuthTestService){}

  ngOnInit(): void{
    this.registerForm = new FormGroup(
      {
        email: new FormControl('',{
          validators:[Validators.required,Validators.email],
          asyncValidators:this.authservice.uniqueEmailValidator(),
          updateOn:'blur'
        }),
        name: new FormControl('',[Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
        phone: new FormControl('',[Validators.required, Validators.minLength(3)]),
        aboutMe: new FormControl('',[Validators.required, Validators.minLength(3)])
      },
      {
        validators:passwordMatchValidator
      }
    )

    this.registerForm.valueChanges.subscribe((res) =>{console.log('❤❤🤣',res)})
  }

  testLoaded():void{

    const mockData ={
      email:'santi@gmail.com',
      name:'santiago',
      lastName:'arroyave',
      phone:'3013872756',
      aboutMe:'hola santiago'
    }
    this.registerForm.setValue(mockData)
  }

  testUploaded():void{

    const mockData ={
      phone:'101010101'
    }
    this.registerForm.patchValue(mockData)
  }

}
function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true};
}
