import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/Contato'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http:HttpClient) { }

  getAllContatos(){
    return this.http.get('http://localhost:8080/contatos')
  }

  putContato(contato: Contato) {
    return this.http.put('http://localhost:8080/contatos', contato)
  }

  getContatoById(id: number){
    return this.http.get(`http://localhost:8080/contatos/${id}`) 
  }

  getContatoByEmail(email: String){
    return this.http.get(`http://localhost:8080/contatos/email/${email}`) 
  }

  getContatoByNome(nome: String){
    return this.http.get(`http://localhost:8080/contatos/nome/${nome}`) 
  }

  postContato(contato:Contato){
    return this.http.post('http://localhost:8080/contatos', contato)
  }
  
  deleteContato(id: number){
    return this.http.delete(`http://localhost:8080/contatos/${id}`)
  }
}
