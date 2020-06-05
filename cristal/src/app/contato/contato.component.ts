import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  nome:string = ''
  email:string = '';
  telefone:string = '';
  numTelefone:number;
  erroTelefone:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  validarTelefone(){
    this.numTelefone = parseInt(this.telefone);
    if(this.telefone.length<10 || this.telefone.length>11 || isNaN(this.numTelefone)){
      this.erroTelefone = true;
    }else{
      this.erroTelefone = false;
    }
  }

  enviar(){

  }

  

}
