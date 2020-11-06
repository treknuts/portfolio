import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.css'],
})
export class SkillChartComponent implements OnInit {
  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public barChartLabels = ['Java', 'JavaScript', 'Python', 'C/C++', 'PHP'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    { data: [8, 8, 8, 4, 6], label: 'Blah', backgroundColor: '#212121' },
  ];

  ngOnInit(): void {}
}
