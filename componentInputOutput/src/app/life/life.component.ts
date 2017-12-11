import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex: number= 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;

  logIt(message: string) {
    console.log(`#${logIndex++} -- ${message}`);
  }

  constructor() {
    this.logIt('name属性在constructor中的值是：' + this.name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.name = changes['name'].currentValue;
    this.logIt('name属性在ngOnChanges中的值是：' + this.name);
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
}
