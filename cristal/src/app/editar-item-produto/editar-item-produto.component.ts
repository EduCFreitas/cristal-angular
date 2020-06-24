import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-item-produto',
  templateUrl: './editar-item-produto.component.html',
  styleUrls: ['./editar-item-produto.component.scss']
})
export class EditarItemProdutoComponent implements OnInit {
  
  produto: Produtos = new Produtos()
  id:number;
  
  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    // pegar na rota ativa (API) o item pelo ID
    let id = this.route.snapshot.params['id']
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
    }, err =>{
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }
  
  salvar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
      this.router.navigate(['/produtos'])
      location.assign('/produtos')
    })
  }
  
}