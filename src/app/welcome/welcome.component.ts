import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('welcome') introElement;

  downloadPdf() {
    const pdfUrl = './assets/Resume.pdf';
    window.open(pdfUrl);
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // const hello = this.introElement.nativeElement;

    // const writer = new Typewriter(hello, {
    //   typeColor: 'white',
    //   cursorColor: '#333333',
    // });

    // writer
    //   .type("Hello, World! I'm Trevor Knutson, a Software Engineer.")
    //   .start();
  }
}
