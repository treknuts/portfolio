import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  origin: String = 'Maddock, ND';
  education: String = 'North Dakota State University';
  major: String = 'Computer Science';
  experience: Array<String> = [
    "'NDSU' => 'Software/Asset Management Assistant'",
    "'NDSU' => 'Web Application Developer'",
    "'Bushel' => 'Software Engineer Intern'",
    "'NDSU' => 'Software Engineer'",
  ];
  interests: Array<String> = [
    'Coding',
    'Golf',
    'Caffeine',
    'Gaming',
    'Snowboarding',
    'Weight lifting',
  ];

  skills: Array<String> = [
    'Java',
    'JavaScript',
    'Python',
    'PHP',
    'C/C++',
    'HTML',
    'CSS',
    'SQL',
    'NoSQL',
  ];

  constructor() {}

  ngOnInit(): void {}
}
