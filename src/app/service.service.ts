import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}
  emailError = true;

  validationEmail(email: any) {
    console.log('ttttttttttttttt', email);
    if (email == '') {
      console.log('trueeeeeeeeeee');
      return true;
    }
    console.log('false');
    return false;
  }
  validationCheck(fieldType: string, fieldValue: any) {
    console.log(fieldType, fieldValue, 'field');
    if (fieldType == 'email') {
      this.emailError = fieldValue ? false : true;
    }
    console.log(this.emailError, 'emailError');
  }
}
