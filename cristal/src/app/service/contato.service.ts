import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contato } from '../model/Contato'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  constructor(private http:HttpClient) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }
  
  getAllContatos(){
    return this.http.get('http://localhost:8080/contatos', this.token)
  }
  
  putContato(contato: Contato) {
    return this.http.put('http://localhost:8080/contatos', contato, this.token)
  }
  
  getContatoById(id: number){
    return this.http.get(`http://localhost:8080/contatos/${id}`, this.token) 
  }
  
  getContatoByEmail(email: String){
    return this.http.get(`http://localhost:8080/contatos/email/${email}`, this.token) 
  }
  
  getContatoByNome(nome: String){
    return this.http.get(`http://localhost:8080/contatos/nome/${nome}`, this.token) 
  }
  
  postContato(contato:Contato){
    return this.http.post('http://localhost:8080/contatos', contato)
  }
  
  deleteContato(id: number){
    return this.http.delete(`http://localhost:8080/contatos/${id}`, this.token)
  }
}
