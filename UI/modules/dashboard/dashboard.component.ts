import { Component, OnInit } from '@angular/core';
import { DataMetrologic } from 'Core/Domain/Model/DataMetrologic.Model';
import { GetAllDataMetrologicUseCase } from 'Core/Domain/UseCase/GetAllDataMetrologicUseCase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataMetrologic!: any;
  response: any;
  city: string = '';
  lat: number = 0;
  lon: number = 0;
  buttons = ['Barranquilla', 'Bogota', 'Cali', 'Medellin'];

  ngOnInit(): void {

  }

  executeQuery(city: string) {
    switch(city) {
      case 'Bogota':
        this.lon = 4.711;
        this.lat = 74.0721;
        break;
      case 'Medellin':
        this.lon = 6.2476;
        this.lat = 75.5658;
        break;
      case 'Cali':
        this.lon = 3.4516;
        this.lat = 76.532;
        break;
      case 'Barranquilla':
        this.lon = 11.0041;
        this.lat = 74.807;
        break;
      default:
        return;
    }
    this.getAllDataMetrologic(this.lon, this.lat);
  }

  getAllDataMetrologic(lat: number, lon: number): void {
    this._getAllDataMetrologicUseCase.getAllDataMetrologic(lat, lon).subscribe(
      (data) => {
        this.dataMetrologic = data;
        console.log(this.dataMetrologic);
      },
      (error: any) => {
        console.error('Error al obtener los datos meteorológicos:', error);
      }
    );
  }

  constructor(
    private _getAllDataMetrologicUseCase: GetAllDataMetrologicUseCase
  ) {}
}
