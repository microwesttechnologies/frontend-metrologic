import { Observable } from 'rxjs';
import { DataMetrologic } from '../Model/DataMetrologic.Model';

export abstract class GetAllDataMetrologicGateway {
  abstract getAll(lat: number, lon: number): Observable<Array<DataMetrologic>>;
}

