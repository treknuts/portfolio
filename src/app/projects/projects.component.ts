import { Component, AfterViewInit, OnInit } from '@angular/core';

interface Project {
  name: string;
  description: string;
  githubUrl: string;
  image: string;
  technologies: Array<Object>;
  wip: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];

  constructor() {
    this.projects = [
      {
        name: 'Robotics Project',
        image: 'assets/robot-mockup.jpg',
        description:
          'A Python program that commands a bot through an obstacle course simulation. The program takes advantage of localization, path-planning, and path-following algorithms to navigate to its target destination.',
        githubUrl: 'https://github.com/treknuts/robotics-project',
        technologies: [{ id: 1, name: 'Python' }],
        wip: false,
      },
      {
        name: 'Audit Error Tracker',
        image: 'assets/capstone-mockup.jpg',
        description:
          'Capstone project for Noridian Healthcare Solutions. My team developed an application that allows managers to upload files and track errors on audits. Users have a plethora of filtering options to view results.',
        githubUrl: 'https://github.com/treknuts/NoridianCapstone',
        technologies: [
          { id: 1, name: 'Python' },
          { id: 2, name: 'MySQL' },
        ],
        wip: false,
      },
      {
        name: 'Brick Breaker',
        image: 'assets/brickbreaker-mockup.jpg',
        description: 'Remake of the retro arcade game Brick Breaker.',
        githubUrl: 'https://github.com/treknuts/BrickBreaker',
        technologies: [{ id: 1, name: 'Java' }],
        wip: false,
      },
      {
        name: 'ChetBot',
        image: 'assets/chet-mockup.jpg',
        description:
          'A Discord chat bot that responds to commands provided in text channels on a server.',
        githubUrl: 'https://github.com/treknuts/chet-bot',
        technologies: [
          { id: 1, name: 'JavaScript' },
          { id: 2, name: 'NodeJs' },
        ],
        wip: true,
      },
      {
        name: 'Sort Visualizer',
        image: 'assets/sort-mockup.gif',
        description:
          'Python program using Matplotlib to visualize common sorting algorithms.',
        githubUrl: 'https://github.com/treknuts/sort-visualizer',
        technologies: [{ id: 1, name: 'Python' }],
        wip: true,
      },
      {
        name: 'TODO App',
        image: 'assets/todo-mockup.jpg',
        description:
          'SPA that allows users to track TODO tasks. Users can organize tasks by priority and progress.',
        githubUrl: 'https://github.com/treknuts/vue-todo',
        technologies: [
          { id: 1, name: 'VueJs' },
          { id: 2, name: 'JavaScript' },
        ],
        wip: false,
      },
      {
        name: 'Glucose Diary',
        image: 'assets/glucose-mockup.jpg',
        description:
          'A mobile application that allows users to log, predict, and visualize their blood glucose levels.',
        githubUrl: 'https://github.com/treknuts/glucose-diary',
        technologies: [
          { id: 1, name: 'Android' },
          { id: 2, name: 'Java' },
          { id: 4, name: 'Firebase' },
        ],
        wip: true,
      },
    ];
  }

  funStuff(element) {
    element.classList.remove('animate-element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-element');
          return;
        }
        element.classList.remove('animate-element');
      });
    });
    observer.observe(element);
  }

  animateBadges() {
    document.querySelectorAll('.badge').forEach((element) => {
      this.funStuff(element);
    });
  }

  ngAfterViewInit() {
    this.animateBadges();
  }

  ngOnInit(): void {}
}
