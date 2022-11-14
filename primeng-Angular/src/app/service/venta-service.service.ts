import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VentaModel } from 'src/model/VentaModel';

@Injectable({
  providedIn: 'root'
})
export class VentaServiceService {

  baseUrl: string = "/api/venta";

  constructor(private http: HttpClient) { }

  getAllVentas(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  save(venta: VentaModel): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*'
    });
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin', '*');

    return this.http.post(this.baseUrl, JSON.stringify(venta), {headers: headers});
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id)
  }
}
