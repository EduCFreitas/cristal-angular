import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-create-item-produto',
  templateUrl: './create-item-produto.component.html',
  styleUrls: ['./create-item-produto.component.scss']
})
export class CreateItemProdutoComponent implements OnInit {
  
  produto: Produtos = new Produtos()
  
  constructor(private produtoService: ProdutosService, private router:Router) { }
  
  ngOnInit(){  
    let token = sessionStorage.getItem('token')
    
    if(token==null){
      alert('Faça o login antes de acessar a página');
      this.router.navigate(['/login']);
    } 
  }
  
  cadastrar(){
    // alert("Entrou função")
    this.produtoService.postProduto(this.produto).subscribe((resp:Produtos)=>{
      // alert("Entrou post")
      this.produto = resp;
      this.router.navigate(['/produtos']);
      alert('Produto cadastrado com sucesso!')
    }, err =>{
      alert('Erro no cadastramento do produto!')
    })
  }
  
  
}
