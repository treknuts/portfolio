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
  ];
  interests: Array<String> = [
    'Coding',
    'Caffeine',
    'Gaming',
    'Snowboarding',
    'Weight lifting',
  ];

  constructor() {}

  ngOnInit(): void {}
}
