import { Component, OnInit } from '@angular/core';
import {PriceQuota} from '../price-quote/price-quote.component';

@Component({
  selector: 'app-output-demo',
  templateUrl: './output-demo.component.html',
  styleUrls: ['./output-demo.component.css']
})
export class OutputDemoComponent implements OnInit {

  private parentPrice: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onPriceChangeHandler(priceQuota: PriceQuota) {
    this.parentPrice = priceQuota.price;
  }
}
