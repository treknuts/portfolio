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

  constructor(private projectsService: ProjectsService) {
    projectsService.resolveProjects().subscribe((data) => {
      this.results = data.data;
    });
  }

  ngOnInit(): void {}
}
