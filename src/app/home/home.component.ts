import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookId = "";
  bookName: string = '';
  author: string = '';
  available = 'Available';
  btnToggle = true;
  testEmitter:any;
  constructor() {
    /* TODO document why this constructor is empty */
    this.ontoggle()

  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    setTimeout(() => {
      this.btnToggle = false;
    }, 2000);
  }
  ontoggle() {
    //alert(this.available )
//     if (this.available == 'Available') {
//       this.available = 'Not Available';
//     }
//     else{
//       this.available = 'Available';
//     }
//   }
this.available == 'Available'? this.available = 'Not Available':this.available = 'Available';
 }

 testclick(val:any){
  this.testEmitter = val;
 }
}
