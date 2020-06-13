import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  usuario:Usuario = new Usuario()

  numCpf:number;
  numTelefone:number;
  numCep:number;

  erroSenha:boolean=false;
  erroCpf:boolean=false;
  erroTelefone:boolean=false;
  erroCep:boolean=false;

  confirmacao = {
    senha:''
  }
  
  constructor(private usuarioService:UsuarioService)  { }
  
  ngOnInit(): void {
  }
  
  validar(){
    this.numCpf = parseInt(this.usuario.cpf);
    this.numTelefone = parseInt(this.usuario.telefone);
    this.numCep = parseInt(this.usuario.cep);

    // Valida senha
    if(this.usuario.senha===this.confirmacao.senha){
      this.erroSenha=false;
    }else{
      this.erroSenha=true;
    }

    // Valida CPF
    if(this.usuario.cpf.length!=11 || isNaN(this.numCpf)){
      this.erroCpf = true;
    }else{
      this.erroCpf = false;
    }

    // Valida telefone
    if(this.usuario.telefone.length<10 || this.usuario.telefone.length>11 || isNaN(this.numTelefone)){
      this.erroTelefone = true;
    }else{
      this.erroTelefone = false;
    }

    // Valida CEP
    if(this.usuario.cep.length!=8 || isNaN(this.numCep)){
      this.erroCep = true;
    }else{
      this.erroCep = false;
    }

    // Confirmação da ausência de erros
    if(this.erroSenha==false && this.erroCpf==false && this.erroCep==false && (this.erroTelefone==false || this.usuario.telefone.length==0)){
      this.cadastrar();
    }
  }

  cadastrar(){
    this.usuarioService.postUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      location.assign('/lista-de-usuarios')
    })
  }
  
}
