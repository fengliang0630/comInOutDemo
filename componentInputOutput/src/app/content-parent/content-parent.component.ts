import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.css']
})
export class ContentParentComponent implements OnInit, AfterContentInit, AfterContentChecked  {

  title: string;
  constructor() {
    this.title= 'head';
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('父组件的内容初始化完毕');
    this.title = 'asdasdad';
  }

  ngAfterContentChecked(): void {
    console.log('父组件的内容变更检测完毕');
  }

}
