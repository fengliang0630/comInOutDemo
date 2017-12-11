import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.css']
})
export class ViewChildChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕');
  }

  greeting(name: string) {
    console.log('htllo  ' + name);
  }

}
