import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  private child1Price: number= 0;
  @Output()
  private send: EventEmitter<number> = new EventEmitter();

  constructor() {
    setInterval(
      () => {
        this.child1Price = 100 * Math.random();
        this.send.emit(this.child1Price);
      },1000
    )
  }

  ngOnInit() {
  }

}
