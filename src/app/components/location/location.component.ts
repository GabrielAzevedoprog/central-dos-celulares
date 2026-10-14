import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent {
  hours = [
    { day: 'Segunda a sexta', time: '09h às 18h' },
    { day: 'Sábado', time: '09h às 15h' },
    { day: 'Domingo', time: 'Fechado' },
  ];
}
