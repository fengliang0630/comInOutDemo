import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-parent',
  templateUrl: './change-parent.component.html',
  styleUrls: ['./change-parent.component.css']
})
export class ChangeParentComponent implements OnInit {

  private parentUserName: string;
  private parentChilds: [{name: string}] = [{name:'张三'}];
  constructor() { }

  ngOnInit() {
  }

  changeNames() {
    let num = Math.random();
    this.parentUserName = '张三' + num;
  }

  changeChilds() {
    let num = Math.random();
    /*修改对象本身地址  子组件会调用onChange事件*/
    this.parentChilds= [{name: '张三'+num}];


    /*只修改对象部分内容  子组件不会调用onChange事件
    this.parentChilds[0].name = '张三'+num;
    */
  }

}
