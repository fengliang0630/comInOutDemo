import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  private childPrice: number;

  constructor() { }

  ngOnInit() {
  }

}
