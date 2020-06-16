import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-create-item-produto',
  templateUrl: './create-item-produto.component.html',
  styleUrls: ['./create-item-produto.component.scss']
})
export class CreateItemProdutoComponent implements OnInit {

  produto: Produtos 

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {   
  }

  cadastrar(){
    this.produtoService.postProduto(this.produto).subscribe((resp:Produtos)=>{
      this.produto = resp
      location.assign('/produtos')
    })
  }


}
