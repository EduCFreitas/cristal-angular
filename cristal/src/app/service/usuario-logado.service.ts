import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  constructor(private http:HttpClient) { }

  // getUsuarioById(id: number){
  //   return this.http.get(`http://localhost:8080/usuarios/${id}`) 
  // }
}
