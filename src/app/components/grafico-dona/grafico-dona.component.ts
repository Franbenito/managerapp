import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {


   // Radar
  @Input('chartLabels') radarChartLabels: string[] = [];

  @Input('chartData') radarChartData: any = [
    {data: [], label: ''},
    {data: [], label: ''}
  ];
  @Input('chartType') radarChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
