import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableDatas: any;
  @Output() formData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  edit(editTable: any, index: any) {
    let test = {
      object: editTable,
      i: index,
    };
    const data = { ...test };
    this.formData.emit(data);
  }

  delete() {}
}
