import { Produtos } from './../model/Produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http:HttpClient) { }

  getAllProdutos(){
    return this.http.get("http://localhost:8080/produto")
  }

  getProdutoById(id: number){
    return this.http.get(`http://localhost:8080/produto/categoria/${id}`) 
  }

  getProdutoCamisetas(categoria:string){
    return this.http.get(`http://localhost:8080/produto/categoria/${categoria}`)
  }

  getProdutoBlusas(categoria: string) {
    return this.http.get(`http://localhost:8080/produto/categoria/${categoria}`)
  }

  getProdutoMoletons(categoria: string) {
    return this.http.get(`http://localhost:8080/produto/categoria/${categoria}`)
  }

  getProdutoCalcas(categoria: string) {
    return this.http.get(`http://localhost:8080/produto/categoria/${categoria}`)
  }

  getProdutoShorts(categoria: string) {
    return this.http.get(`http://localhost:8080/produto/categoria/${categoria}`)
  }

  postProduto(produto:Produtos){
    return this.http.post('http://localhost:8080/produto', produto)
  }



  
}
