import { ProdutosService } from './../service/produtos.service';
import { Produtos } from './../model/Produtos';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produtos[]
  listaProdutosResetada: Produtos[]


  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    this.todosProdutos();
  }

todosProdutos(){
  this.produtoService.getAllProdutos().subscribe((res: Produtos[]) => {
    this.listaProdutos = res
    this.listaProdutosResetada = res
  })
}


filtrarCamisetas (produto: Produtos){
return produto.categoria === "camiseta"
}
cliqueCamiseta(){
 this.listaProdutos = this.listaProdutosResetada.filter(this.filtrarCamisetas)
}

filtrarBlusas(produto: Produtos){  
  return produto.categoria === "blusa"
}
clickBlusa(){
  this.listaProdutos = this.listaProdutosResetada.filter(this.filtrarBlusas)
}

filtrarMoletons(produto: Produtos){
  return produto.categoria === "moletom"
}
clickMoletom(){
  this.listaProdutos = this.listaProdutosResetada.filter(this.filtrarMoletons)
}

  filtrarCalcas(produto: Produtos){
    return produto.categoria === "calcas"
}
clickcalca(){
  this.listaProdutos = this.listaProdutosResetada.filter(this.filtrarCalcas)
}

  filtrarShorts(produto: Produtos){
    return produto.categoria === "shorts"
}
clickshorts(){
  this.listaProdutos = this.listaProdutosResetada.filter(this.filtrarShorts)

}

}
