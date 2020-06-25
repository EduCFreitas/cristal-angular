import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

  getAllUsuarios(){
    return this.http.get('http://localhost:8080/usuarios', this.token)
  }

  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario, this.token)
  }

  getUsuarioById(id: number){
    return this.http.get(`http://localhost:8080/usuarios/${id}`, this.token) 
  }

  getUsuarioByCpf(cpf: string){
    return this.http.get(`http://localhost:8080/usuarios/cpf/${cpf}`, this.token) 
  }

  getUsuarioByNome(nome: string){
    return this.http.get(`http://localhost:8080/usuarios/nome/${nome}`, this.token) 
  }

  getUsuarioByEmail(email: string){
    return this.http.get(`http://localhost:8080/usuarios/email/${email}`, this.token) 
  }

  // postUsuario(usuario:Usuario){
  //   return this.http.post('http://localhost:8080/usuarios', usuario)
  // }
  
  deleteUsuario(id: number){
    return this.http.delete(`http://localhost:8080/usuarios/${id}`, this.token)
  }





}
