import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildChildComponent} from '../view-child-child/view-child-child.component';

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('child1')
  private child: ViewChildChildComponent;

  constructor() { }

  ngOnInit() {
    this.child.greeting('Jerry');
  }

  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
  }

  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }

}
