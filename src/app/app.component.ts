import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // primary
  // dark = #0077c2;
  // primary = #42a5f5;
  // light = #80d6ff;
  // secondary
  // dark = #c77800;
  // primary = #ffa726;
  // light = #ffd95b
  name = 'Trevor Knutson';
  jobTitle = 'Software Developer';
  about =
    'Greetings! I am a senior Computer Science student at North Dakota State University ' +
    'on track to graduate this December. I cannot wait to start my career as a Software Engineer. ' +
    'I am an experienced web developer and look forward to becoming an asset at your company! ' +
    'Prospective employers (or anyone who is curious) are welcome to take a look at my resume.';
  title = 'resume-app';
  linkedin = 'https://www.linkedin.com/in/trevor-knutson-205413168/';
  github = 'https://www.github.com/treknuts';

  downloadPdf() {
    const pdfUrl = './assets/Resume.pdf';
    window.open(pdfUrl);
  }

  showWork() {
    alert('I code sometimes! xD');
  }

  constructor() {}

  ngOnInit(): void {}
}
