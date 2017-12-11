import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { OrderComponent } from './order/order.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LifeComponent } from './life/life.component';
import { ChangeComponent } from './change/change.component';
import { ChangeParentComponent } from './change-parent/change-parent.component';
import {FormsModule} from '@angular/forms';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './view-child-child/view-child-child.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';


@NgModule({
  declarations: [
    AppComponent,
    InputDemoComponent,
    OrderComponent,
    OutputDemoComponent,
    PriceQuoteComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    LifeComponent,
    ChangeComponent,
    ChangeParentComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    ContentParentComponent,
    ContentChildComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
