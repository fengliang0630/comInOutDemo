import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {

  private parentPrice: number = 0;

  constructor() {
    setInterval(
      () => {
        this.parentPrice = 100 * Math.random();
      }, 1000
    );
  }

  ngOnInit() {
  }

}
