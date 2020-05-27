import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getAllUsuarios(){
    return this.http.get('http://93.188.161.223:9000/user')
  }

  putUsuario(usuario: Usuario) {
    return this.http.put('http://93.188.161.223:9000/user', usuario)
  }

  getUsuarioById(id: number){
    return this.http.get(`http://93.188.161.223:9000/user/${id}`) 
  }
  postUsuario(usuario:Usuario){
    return this.http.post('http://93.188.161.223:9000/user', usuario)

  deleteUsuario(id: number){
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`)
  }

}
