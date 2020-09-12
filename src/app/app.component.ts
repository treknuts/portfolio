import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'resume-app';

  downloadPdf() {
    const pdfUrl = './assets/Resume.pdf';
    const pdfName = 'Resume';
    window.open(pdfUrl);
  }
}
