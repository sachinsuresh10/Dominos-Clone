import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderd',
  templateUrl: './orderd.component.html',
  styleUrls: ['./orderd.component.css']
})
export class OrderdComponent implements OnInit {

  constructor() { }
  address!:any;
  ngOnInit(): void {
    this.address = sessionStorage.getItem('address');
    console.log(sessionStorage.getItem('address'));
  }


}
