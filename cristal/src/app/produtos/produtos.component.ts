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
  filtroAtual: string = ''
  filtroCorAtual: string = ''
  filtroTipoAtual: string = ''
  filtroTamanhoAtual: string= ''

  alerta:boolean = false


  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.todosProdutos();

    let item = sessionStorage.getItem('deletar')
    
    if (item == "true"){
      this.alerta = true
      sessionStorage.removeItem('deletar');
      // localStorage.clear()
      
      setTimeout(()=>{
        location.assign('/produtos')
      },3000)

    }
  }

  resetarFiltro () {
    this.filtroAtual = ""
    this.listaProdutos = this.listaProdutosResetada;
    this.filtroCorAtual !== '' && this.filtrarPorCor(this.filtroCorAtual)
  }

  resetarFiltroCor () {
    this.filtroCorAtual = ""
    this.listaProdutos = this.listaProdutosResetada;
    this.filtroAtual !== '' && this.filtrarPor(this.filtroAtual, this.filtroTipoAtual)
  }

  todosProdutos() {
    this.produtoService.getAllProdutos().subscribe((res: Produtos[]) => {
      this.listaProdutos = res
      this.listaProdutosResetada = res
    })
  }

  estaMostrando: boolean = false;
  toggle(): void {
    this.estaMostrando = !this.estaMostrando;
  }

  filtrarPor (filtro, tipo) {
    this.filtroAtual = filtro;
    this.filtroTipoAtual = tipo;
    this.listaProdutos = (this.filtroCorAtual !== '' ? this.listaProdutos : this.listaProdutosResetada).filter(function (produto: Produtos) {
      return produto[tipo].toLocaleLowerCase() === filtro
    })
  }

  filtrarPorCor(cor) {
    this.filtroCorAtual = cor;
    this.listaProdutos = (this.filtroAtual !== '' ? this.listaProdutos : this.listaProdutosResetada).filter(function (produto: Produtos) {
      return produto.cor.toLocaleLowerCase() === cor
    })
  }

}
