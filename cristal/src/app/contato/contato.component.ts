import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/Contato';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  contato:Contato = new Contato();
  
  numTelefone:number;
  erroTelefone:boolean = false;

  constructor(private contatoService:ContatoService, private router:Router) { }

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
    if(this.erroTelefone==false || this.contato.telefone.length==0){
      this.contatoService.postContato(this.contato).subscribe((resp:Contato)=>{
        this.contato = resp;
        this.router.navigate(['/home'])
        alert("Mensagem de contato enviada!");
      }, err =>{
        alert('Erro ao enviar formulário de contato!')
      })
    }
  }

  

}
