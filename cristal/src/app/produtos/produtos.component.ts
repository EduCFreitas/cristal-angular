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


  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    
    this.todosProdutos();
  }

todosProdutos(){
  this.produtoService.getAllProdutos().subscribe((res: Produtos[]) => {
    this.listaProdutos = res
  })
}

filtrarCamisetas(categoria:string){
  this.produtoService.getProdutoCamisetas(categoria)
}

filtrarBlusas(){
}

filtrarMoletons(){

}

filtrarCalcas(){

}

filtrarShorts(){

}

}
