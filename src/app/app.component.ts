import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'resume-app';
  email = 'trevorknutson.complete@gmail.com';
  linkedin = 'https://www.linkedin.com/in/trevor-knutson-205413168/';
  github = 'https://www.github.com/treknuts';

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToElement(element: string) {
    window.scroll({ behavior: 'smooth' });
    if (element === 'welcome') {
      this.viewportScroller.scrollToPosition([0, 0]);
    } else {
      this.viewportScroller.setOffset([0, 55]);
      this.viewportScroller.scrollToAnchor(element);
    }
  }

  ngOnInit(): void {
    smoothscroll.polyfill();
  }
}
