import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('welcome') introElement;
  @ViewChild('titles') titlesElement;
  title = 'resume-app';
  linkedin = 'https://www.linkedin.com/in/trevor-knutson-205413168/';
  github = 'https://www.github.com/treknuts';

  downloadPdf() {
    const pdfUrl = './assets/Resume.pdf';
    window.open(pdfUrl);
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const hello = this.introElement.nativeElement;
    const title = this.titlesElement.nativeElement;

    const writer = new Typewriter(hello, {
      typeColor: 'white',
      cursorColor: '#212121',
    });

    const titleWriter = new Typewriter(title, {
      loop: true,
      cursorColor: '#212121',
      typeColor: 'white',
    });

    writer
      .type("Hello, World! I'm Trevor Knutson,")
      .removeCursor()
      .then(titleWriter.start.bind(titleWriter))
      .start();

    titleWriter.strings(
      800,
      'a Software Engineer.',
      'a Web Developer.',
      'a Comp Sci student.',
      'a nerd',
      'a gamer.',
      'a father.',
      'a life-long learner'
    );
  }
}
