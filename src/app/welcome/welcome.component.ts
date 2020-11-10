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

    const nameWriter = new Typewriter(title, {
      cursorColor: '#212121',
      typeColor: 'white',
    });

    const titleWriter = new Typewriter(title, {
      cursorColor: '#212121',
      typeColor: 'white',
    });

    writer
      .type("Hello, World! I'm Trevor Knutson,")
      .removeCursor()
      .then(titleWriter.start.bind(titleWriter))
      .start();

    titleWriter.type('a Software Engineer.');

    // titleWriter.strings(
    //   800,
    //   'a Software Engineer.',
    //   'a Web Developer.',
    //   'a Comstudent.',
    //   'a nerd.',
    //   'a gamer.',
    //   'a dad.',
    //   'a life-long learner.'
    // );
  }
}
