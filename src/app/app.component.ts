import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos: personas[] = [
    {
      id: 1,
      nombre: 'Ochako',
      apellido: 'Uraraka',
      sexo: 'F',
    },
    { id: 2, nombre: 'Izuku', apellido: 'Midoriya', sexo: 'M' },
    {
      id: 3,
      nombre: 'Bakugo',
      apellido: 'Katsuki',
      sexo: 'M',
    },
    {
      id: 4,
      nombre: 'Yagi',
      apellido: 'Toshinori',
      sexo: 'M',
    },
    {
      id: 5,
      nombre: 'Jiro',
      apellido: 'Kyoka ',
      sexo: 'F',
    },
  ];
}

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
}
