import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-item-produto',
  templateUrl: './deletar-item-produto.component.html',
  styleUrls: ['./deletar-item-produto.component.scss']
})
export class DeletarItemProdutoComponent implements OnInit {

  produto:Produtos = new Produtos
  deletar: boolean = false

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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

  btnSim(){
    this.produtoService.deleteProduto(this.produto.id).subscribe(()=>{
      this.deletar = true
      this.router.navigate(['/produtos'])
      localStorage.setItem("deletar", this.deletar.toString())
    })
  }

  btnNao(){
  this.router.navigate(['/produtos'])    
  }
}