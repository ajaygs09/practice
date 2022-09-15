import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}
  registrationForm = this.fb.group({
    user: ['',[Validators.required,Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });

  loadApi() {
    this.registrationForm.setValue({
      user: 'ajay',
      password: 'test',
      confirmPassword: 'test Confirm',
      address: {
        city: 'city',
        state: 'state',
        postalCode: '1234',
      },
    });
  }

  ngOnInit(): void {}
}
