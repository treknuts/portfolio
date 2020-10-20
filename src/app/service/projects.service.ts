import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private BASE_URL = 'http://localhost:8000/api/v1/projects';

  constructor(private http: HttpClient) {}

  resolveProjects(): Observable<any> {
    console.log('Request for projects sent!');
    return this.http.get(this.BASE_URL);
  }
}
