import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.scss']
})
export class ItemProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id:number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produtos)=>{    
      this.produto = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

  comprar(){
      // location.assign('/carrinho')
   // })
}

}
