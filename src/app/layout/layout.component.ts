import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  tableData:any = []
  editData:any

  constructor() { }

  ngOnInit(): void {
  }

  sendData(val:any){
    this.tableData.push(val);
    console.log(this.tableData,"test")
  }
  
  sendEdit(val:any){
    this.editData = val?.object
  }

}
