import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }
  
  logarUsuario(usuarioLogin:UsuarioLogin){
    return this.http.post('http://localhost:8080/usuarios/login', usuarioLogin)
  }
  
  cadastrarUsuario(usuario:Usuario){
    return this.http.post('http://localhost:8080/usuarios', usuario)
  }
  
  btnSair(){
    let ok = false;
    let token = sessionStorage.getItem('token');
    if(token!=null){
      ok = true;
    }
    return ok;
  }

  btnLogin(){
    let ok = false;
    let token = sessionStorage.getItem('token')
    if(token==null){
      ok = true;
    }
    return ok;
  }

  buscaNomeUsuario(){
    let primeiroNome = sessionStorage.getItem('nomeUsuario').split(' ').slice(0,1);
    return primeiroNome;
  }

  buscaIdUsuario(){
    let idUsuario = parseInt(sessionStorage.getItem('idUsuario'));
    return idUsuario;
  }

  ehUsuarioAdmin(){
    let admin = false;
    if(sessionStorage.getItem('tipoUsuario')=='admin'){
      admin = true
    }
    return admin;
  }

}
