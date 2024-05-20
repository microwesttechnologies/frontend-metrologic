import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllDataMetrologicGateway } from '../Gateway/GetAllDataMetrologic.Gateway';
import { DataMetrologic } from '../Model/DataMetrologic.Model';

@Injectable({
  providedIn: 'root',
})
export class GetAllDataMetrologicUseCase {
  constructor(private _dataMetrologicGateway: GetAllDataMetrologicGateway) {}

  getAllDataMetrologic(lat: number, lon: number): Observable<Array<DataMetrologic>> {
    return this._dataMetrologicGateway.getAll(lat, lon);
  }
}
