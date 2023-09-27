import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
//import { Tutorial } from '../models/tutorial.model';

const host = 'http://localhost:3002';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  getNotas():any {
    return this.http.get(`${host}/notas`);
  }
  createNota(notaData: any): Observable<any> {
    return this.http.post<any>(`${host}/notas`, notaData);
  }

  editarNota(id: number, notaData: any): Observable<any> {
    return this.http.put<any>(`${host}/notas/${id}`, notaData);
  }

  eliminarNota(id: number): Observable<void> {
    return this.http.delete<void>(`${host}/notas/${id}`);
  }
  
}
