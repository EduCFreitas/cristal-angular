import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoginService {

  constructor(private http: HttpClient) { }

  // postUsuarioLogin(usuarioLogin:UsuarioLogin){
  //   return this.http.post('http://localhost:8080/usuarios/login', usuarioLogin)
  // }
}
