import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  submitForm:any;
  @Input() editForm:any;
  @Output() formDatas = new EventEmitter();
get firstName(){
  return this.submitForm('firstName');
  
}
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      firstName:['', Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      amount:['',Validators.required]
    })
  }

  submitData(){
    this.formDatas.emit(this.submitForm.value)
  }

}
