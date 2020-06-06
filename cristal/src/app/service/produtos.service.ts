import { Produtos } from './../model/Produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  

  constructor(private http:HttpClient) { }

  getAllProdutos(){
    return this.http.get(" http://www.mocky.io/v2/5edad2823200006f005d261b")
  }

  getProdutoCamisetas(categoria:string){
    return this.http.get(` http://www.mocky.io/v2/5edad2823200006f005d261b/${categoria}`)
  }

  getProdutoBlusas(categoria: string) {
    return this.http.get(` http://www.mocky.io/v2/5edad2823200006f005d261b/${categoria}`)
  }

  getProdutoMoletons(categoria: string) {
    return this.http.get(` http://www.mocky.io/v2/5edad2823200006f005d261b/${categoria}`)
  }

  getProdutoCalcas(categoria: string) {
    return this.http.get(` http://www.mocky.io/v2/5edad2823200006f005d261b/${categoria}`)
  }

  getProdutoShorts(categoria: string) {
    return this.http.get(` http://www.mocky.io/v2/5edad2823200006f005d261b/${categoria}`)
  }
}
