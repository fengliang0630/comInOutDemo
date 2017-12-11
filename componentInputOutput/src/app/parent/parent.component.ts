import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private parentPrice: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onChange(price: number) {
    this.parentPrice = price;
  }

}
