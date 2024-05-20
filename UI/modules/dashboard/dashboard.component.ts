import { Component, OnInit } from '@angular/core';
import { DataMetrologic } from 'Core/Domain/Model/DataMetrologic.Model';
import { GetAllDataMetrologicUseCase } from 'Core/Domain/UseCase/GetAllDataMetrologicUseCase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataMetrologic: Array<DataMetrologic> = [];
  response: any;
  buttons = ['Barranquilla', 'Bogota', 'Cali', 'Medellin', 'Bucaramanga'];

  ngOnInit(): void {
    this.getAllDataMetrologic();
  }

  getAllDataMetrologic() {
    this.response = this._getAllDataMetrologicUseCase
      .getAllDataMetrologic(6.2476, 75.565)
      .subscribe(
        (data) => {
          this.dataMetrologic = data;
          console.log(data);
        },
        (error: any) => {
          console.error('Error al obtener los datos meteorologicos:', error);
        }
      );
  }

  constructor(
    private _getAllDataMetrologicUseCase: GetAllDataMetrologicUseCase
  ) {}
}
