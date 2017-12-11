import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit, AfterContentInit, AfterContentChecked {
 constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
   console.log("子组件的内容初始化完毕");
  }

  ngAfterContentChecked(): void {
    console.log("子组件的内容变更检测完毕");
  }

}
