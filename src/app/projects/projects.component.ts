import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input()
  results: Observable<any>;

  langs: { [key: string]: string } = {};

  constructor(private projectsService: ProjectsService) {
    projectsService.resolveProjects().subscribe((data) => {
      this.results = data.data;
    });
  }

  ngOnInit(): void {
    (this.langs['JavaScript'] =
      'https://img.icons8.com/color/48/000000/javascript.png'),
      (this.langs['Vue.js'] =
        'https://img.icons8.com/color/48/000000/vue-js.png');
    this.langs['Python'] = 'https://img.icons8.com/color/48/000000/python.png';
    this.langs['Java'] =
      'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png';
    this.langs['Flutter'] =
      'https://img.icons8.com/color/48/000000/flutter.png';
    this.langs['MySQL'] = 'https://img.icons8.com/ios/50/000000/mysql-logo.png';
    this.langs['Laravel'] =
      'https://img.icons8.com/ios-filled/50/000000/laravel.png';
    this.langs['Node.js'] = 'https://img.icons8.com/color/48/000000/nodejs.png';
    this.langs['Dart'] = 'https://img.icons8.com/color/48/000000/dart.png';
  }
}
