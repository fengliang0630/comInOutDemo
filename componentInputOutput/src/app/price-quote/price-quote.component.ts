import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  @Output('priceChange')
  private lastPrice: EventEmitter<PriceQuota>;
  private childPrice: number= 0;
  constructor() {
    this.lastPrice = new EventEmitter();
    setInterval(
      () => {
        let priceQuotaTem = new PriceQuota(100 * Math.random());
        this.childPrice = priceQuotaTem.price;
        this.lastPrice.emit(priceQuotaTem);
      },1000);
  }

  ngOnInit() {
  }
}

export class PriceQuota {
  constructor(
    public price: number
  ) {}
}


