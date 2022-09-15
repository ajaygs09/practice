import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data:any[]= [
    {
      "firstName": "Ajay",
      "lastName": "G S",
      "age": 16,
      "class": 10,
      "studentId": 7129,
      "term1Marks": {
        "tamil": 91,
        "english": 90,
        "maths": 86,
        "science": 99,
        "socialScience": 96,
      },
        "term2Marks": {
          "tamil": 89,
          "english": 95,
          "maths": 90,
          "science": 100,
          "socialScience": 98,
        },
      },
  
    {
      "firstName": "Ajin",
      "lastName": "Vinoj",
      "age": 16,
      "class": 11,
      "studentId": 7130,
      "term1Marks": {
        "tamil": 95,
        "english": 90,
        "maths": 88,
        "science": 95,
        "socialScience": 90},
        "term2Marks": {
          "tamil": 84,
          "english": 94,
          "maths": 92,
          "science": 99,
          "socialScience": 97,
        },
      },
    
  ]; 

  showMe=false;
  @Input() id = '';
  @Output() clicks = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
