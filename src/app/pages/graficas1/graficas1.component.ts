import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {



  graficos: any = {
    'grafico1': {
      'labels': ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
      'data':  [{data: [93, 59, 90, 81, 56, 55, 1], label: 'Messi'}],
      'type': 'radar',
      'leyenda': 'Messi',
    },
    'grafico2': {
      'labels': ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
      'data':  [{data: [88, 59, 90, 81, 56, 55, 20], label: 'Cristiano Ronaldo'}],
      'type': 'radar',
      'leyenda': 'Cristiano Ronaldo'
    },
    'grafico3': {
      'labels': ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
      'data':  [{data: [78, 59, 90, 81, 56, 55, 3], label: 'Bale'}],
      'type': 'radar',
      'leyenda': 'Bale'
    },
    'grafico4': {
      'labels': ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
      'data':  [{data: [98, 59, 90, 81, 56, 55, 0], label: 'Mbappé'}],
      'type': 'radar',
      'leyenda': 'Mbappé'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
