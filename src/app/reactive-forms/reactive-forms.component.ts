import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { forbiddenValidator } from './userName.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   user: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  //error messages
  nameRequiredError='User Name is required';
  nameMinLengthError="User Name must be 3 characters";
  nameCharacterError="User Name must be Characters";
  passwordRequiredError="Password is required";
  passwordMinLengthError="Password must be length of 8";
  emailRequiredError="Email is required";
  emailValidError="Enter Valid email";
  phoneNumberValidError="PhoneNumber is required";
  phoneNumberMinLengthError="Enter valid phone number";

 get user(){
    return this.registrationForm.get('user');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get phoneNumber(){
    return this.registrationForm.get('phoneNumber');
  }
  constructor(private fb: FormBuilder,public eV: ServiceService) {}
  registrationForm = this.fb.group({
    user: ['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z]{1,30}$/)]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    phoneNumber:['',[Validators.required,Validators.pattern("[789][0-9]{9}")]],
    email:['',[Validators.email]]
  });

  // loadApi() {
  //   this.registrationForm.setValue({
  //     user: 'ajay',
  //     password: 'test',
  //     confirmPassword: 'test Confirm',
  //     address: {
  //       city: 'city',
  //       state: 'state',
  //       postalCode: '1234',
  //     },
  //   });
  // }
 
  ngOnInit(): void {}
  onSubmit(){
    console.log(this.registrationForm.value)
  }
}
