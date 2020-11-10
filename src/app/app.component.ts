import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

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
    console.log(element);
    this.viewportScroller.setOffset([0, 150]);
    this.viewportScroller.scrollToAnchor(element);
  }

  ngOnInit(): void {}
}
