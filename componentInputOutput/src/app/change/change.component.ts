import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  private userName: string;

  @Input()
  private childs: [{name: string}];

  private age: number = 0;

  private c: [{name: string}]= [{name:'111'}];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  changeObj() {
    this.c = [{name: '' + Math.random()}];
  }

  ngDoCheck(): void {
    console.log('doCheck 调用');
  }

}
