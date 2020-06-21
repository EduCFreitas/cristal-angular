import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  // getAllUsuarios(){
  //   return this.http.get('http://93.188.161.223:9000/user')
  // }
  getAllUsuarios(){
    return this.http.get('http://localhost:8080/usuarios')
  }

  // putUsuario(usuario: Usuario) {
  //   return this.http.put('http://93.188.161.223:9000/user', usuario)
  // }
  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario)
  }

  // getUsuarioById(id: number){
  //   return this.http.get(`http://93.188.161.223:9000/user/${id}`) 
  // }
  getUsuarioById(id: number){
    return this.http.get(`http://localhost:8080/usuarios/${id}`) 
  }

  getUsuarioByCpf(cpf: string){
    return this.http.get(`http://localhost:8080/usuarios/cpf/${cpf}`) 
  }

  getUsuarioByNome(nome: string){
    return this.http.get(`http://localhost:8080/usuarios/nome/${nome}`) 
  }

  getUsuarioByEmail(email: string){
    return this.http.get(`http://localhost:8080/usuarios/email/${email}`) 
  }

  // postUsuario(usuario:Usuario){
  //   return this.http.post('http://93.188.161.223:9000/user', usuario)
  // }
  postUsuario(usuario:Usuario){
    return this.http.post('http://localhost:8080/usuarios', usuario)
  }
  
  // deleteUsuario(id: number){
  //   return this.http.delete(`http://93.188.161.223:9000/user/${id}`)
  // }
  deleteUsuario(id: number){
    return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }





}
