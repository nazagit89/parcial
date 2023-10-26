import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from '../modelos/datos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
   

  constructor(private http:HttpClient) { 

  }

  public obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/datos.json');
  }

  
}
