import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'Core/Config/Enviroment';
import { DataMetrologic } from 'Core/Domain/Model/DataMetrologic.Model';
import { GetAllDataMetrologicGateway } from 'Core/Domain/Gateway/GetAllDataMetrologic.Gateway';

@Injectable({
  providedIn: 'root',
})
export class GetAllDataMetrologicService extends GetAllDataMetrologicGateway {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(lat: number, lon: number): Observable<DataMetrologic[]> {
    return this.http.get<Array<DataMetrologic>>(environment.apiUrl + 'data/'+lat+'/'+lon);
  }
}
