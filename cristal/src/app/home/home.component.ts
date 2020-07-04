import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaProdutos: Produtos[]


  constructor( private ProdutosService: ProdutosService) { }

  ngOnInit(): void {
    this.todosProdutos();
  }

  todosProdutos() {
    this.ProdutosService.getAllProdutos().subscribe((res: Produtos[]) => {
      this.listaProdutos = res
    })
  }

}
