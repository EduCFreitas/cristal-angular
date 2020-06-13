import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  contato:Contato = new Contato();
  // nome:string = ''
  // email:string = '';
  // telefone:string = '';
  numTelefone:number;
  erroTelefone:boolean = false;

  constructor(private contatoService:ContatoService) { }

  ngOnInit(): void {

  }

  validarTelefone(){
    this.numTelefone = parseInt(this.contato.telefone);
    if(this.contato.telefone.length<10 || this.contato.telefone.length>11 || isNaN(this.numTelefone)){
      this.erroTelefone = true;
    }else{
      this.erroTelefone = false;
    }
  }

  enviar(){
    // alert("testando método enviar");
    this.contatoService.postContato(this.contato).subscribe((resp:Contato)=>{
      this.contato = resp;
      alert("Mensagem de contato enviada!");
    })
  }

  

}
