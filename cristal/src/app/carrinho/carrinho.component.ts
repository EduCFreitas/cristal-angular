import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  carrinho = {
    nomeProduto:'',
    valorProduto:0,
    qtdProduto:0,
    subtotal:0,
    total:0
  }

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let token = sessionStorage.getItem('token') 
    
    if(token==null){
      alert('Faça o login antes de acessar a página');
      this.router.navigate(['/login']);
    }
    this.carrinho.nomeProduto = sessionStorage.getItem('nomeProduto');
    this.carrinho.valorProduto = parseFloat(sessionStorage.getItem('valorProduto'));
    this.carrinho.qtdProduto = 1;

    this.calculaTotal();
  }

  calculaTotal(){
    this.carrinho.subtotal = this.carrinho.valorProduto*this.carrinho.qtdProduto;
    this.carrinho.total = this.carrinho.subtotal;
    // console.log(this.carrinho.subtotal)
    // console.log(this.carrinho.total)
  }

  comprar(){
    sessionStorage.setItem('nomeProduto', '');
    sessionStorage.setItem('valorProduto', '');
    this.carrinho.nomeProduto='';
    this.carrinho.qtdProduto=0;
    this.carrinho.subtotal=0;
    this.carrinho.total=0;
    this.carrinho.valorProduto=0;
    this.router.navigate(['/home']);
    alert('Compra finalizada com sucesso!');
  }


}
