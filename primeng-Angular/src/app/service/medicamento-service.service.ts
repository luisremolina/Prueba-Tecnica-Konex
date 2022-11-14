import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { medicamento } from 'src/model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoServiceService {

  baseUrl: string = "/api/medicamentos";

  constructor(private http: HttpClient) { }

  getAllMedicamentos(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  save(medicamento: medicamento): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*'
    });
    // headers = headers.set();
    // headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.baseUrl, JSON.stringify(medicamento), {headers: headers});
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id)
  }

}
