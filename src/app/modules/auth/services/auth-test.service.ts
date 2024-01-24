import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>{
      return of(control.value)
      .pipe(
        delay(1500),
        map((email)=>{
        const emails = ['test@test.com','hola@gmail.com'];
        return emails.includes(email);
      })
      ).pipe(
        map((exists) => (exists ? {emailExists: true}: null))
      );
    }
  }
}
