import { Component } from '@angular/core';
import { CarruselComponent } from '../../shared/carrusel/carrusel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
