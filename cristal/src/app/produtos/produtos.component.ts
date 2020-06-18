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

  alerta:boolean = false


  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    this.todosProdutos();

    let item = localStorage.getItem('deletar')
    
    if (item == "true"){
      this.alerta = true
      localStorage.clear()
      
      setTimeout(()=>{
        location.assign('/produtos')
      },3000)
 
    }
  }

todosProdutos(){
  this.produtoService.getAllProdutos().subscribe((res: Produtos[]) => {
    this.listaProdutos = res
    this.listaProdutosResetada = res
  })
}

// filtrarCamisetas () {
//   this.listaProdutos.filter(function (produto: any) {
//     return produto.categoria === "camiseta"
//   })
// }

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
