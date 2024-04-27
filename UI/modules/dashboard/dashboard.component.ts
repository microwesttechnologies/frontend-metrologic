import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
buttons = [
  "Barranquilla",
  "Bogota",
  "Cali",
  "Medellin",
  "Bucaramanga"
]

}
