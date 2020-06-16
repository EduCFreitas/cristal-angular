import { Produtos } from './../model/Produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  

  constructor(private http:HttpClient) { }

  getAllProdutos(){
    return this.http.get(" http://localhost:8080/produto")
  }

  getProdutoCamisetas(categoria:string){
    return this.http.get(` http://localhost:8080/produto/${categoria}`)
  }

  getProdutoBlusas(categoria: string) {
    return this.http.get(` http://localhost:8080/produto/${categoria}`)
  }

  getProdutoMoletons(categoria: string) {
    return this.http.get(` http://localhost:8080/produto/${categoria}`)
  }

  getProdutoCalcas(categoria: string) {
    return this.http.get(` http://localhost:8080/produto/${categoria}`)
  }

  getProdutoShorts(categoria: string) {
    return this.http.get(` http://localhost:8080/produto/${categoria}`)
  }

  
}
