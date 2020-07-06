import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.scss']
})
export class ItemProdutoComponent implements OnInit {
  
  produto: Produtos = new Produtos()
  id:number;
  
  constructor(private produtoService: ProdutosService, public auth:AuthService, private route: ActivatedRoute, private router:Router) { 
    
  }
  
  ngOnInit(): void {
    let id:number = this.route.snapshot.params['id']
    let token = sessionStorage.getItem('token')
    
    if(token==null){
      alert('Faça o login antes de acessar a página');
      this.router.navigate(['/login']);
    }

    this.findById(id)
    
  }
  
  findById(id:number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produtos)=>{    
      this.produto = resp
      console.log(this.produto)
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    });
  }
  
  comprar(){
    sessionStorage.setItem('nomeProduto', this.produto.nome);
    sessionStorage.setItem('valorProduto', this.produto.valor.toString());
    this.router.navigate(['/carrinho']);
    alert('Produto adicionado ao carrinho!');
  }
  
}
