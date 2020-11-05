import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  onClickScroll(element: string) {
    console.log(element);
    this.viewportScroller.scrollToAnchor(element);
  }

  ngOnInit(): void {}
}
