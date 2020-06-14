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
  erroNome:boolean=false;
  erroEmail:boolean=false;
  erroLogradouro:boolean=false;
  erroNumResidencia:boolean=false;
  erroEstado:boolean=false;
  erroCidade:boolean=false;
  erroBairro:boolean=false;
  erroCadastro:boolean=false;

  confirmacao = {
    senha:''
  }
  
  constructor(private usuarioService:UsuarioService)  { }
  
  ngOnInit(): void {
  }

  // validar(){
  //   if(this.usuario.senha===this.confirmacao.senha){
  //     this.erroSenha=false;
  //     this.cadastrar();
  //   }else{
  //     this.erroSenha=true;
  //   }
  // }
  
  validar(){
    this.validarSenha();
    // console.log(`senha: ${this.erroSenha}`)
    this.validarNome();
    // console.log(`nome: ${this.erroNome}`)
    this.validarCpf();
    // console.log(`cpf: ${this.erroCpf}`)
    this.validarTelefone();
    // console.log(`telefone: ${this.erroTelefone}`)
    this.validarLogradouro();
    // console.log(`logradouro: ${this.erroLogradouro}`)
    this.validarNumResidencia();
    console.log(`numero: ${this.erroNumResidencia}`)
    this.validarEstado();
    // console.log(`estado: ${this.erroEstado}`)
    this.validarCidade();
    // console.log(`cidade: ${this.erroCidade}`)
    this.validarBairro();
    // console.log(`bairro: ${this.erroBairro}`)
    this.validarCep();
    // console.log(`cep: ${this.erroCep}`)
    this.validarEmail();
    // console.log(`email: ${this.erroEmail}`)
    if(!this.erroSenha && !this.erroNome && !this.erroCpf && (!this.erroTelefone || !this.usuario.telefone) && !this.erroLogradouro && !this.erroNumResidencia &&!this.erroEstado && !this.erroCidade && !this.erroBairro && !this.erroCep && !this.erroEmail){
      this.erroCadastro = false;
      this.cadastrar();
    }else{
      this.erroCadastro = true;
    }
    console.log(`cadastro: ${this.erroCadastro}`)
    console.log(`numero: ${this.usuario.numResidencia}`)
  }

  validarSenha(){
    if(!this.usuario.senha){
      this.usuario.senha = "";
    }
    if(this.usuario.senha===this.confirmacao.senha && this.usuario.senha.length>=8 && this.usuario.senha.length<=50){
      this.erroSenha=false;
    }else{
      this.erroSenha=true;
    }
  }

  validarNome(){
    if(!this.usuario.nome){
      this.usuario.nome = "";
    }
    if(this.usuario.nome.length>3 || this.usuario.nome.length<80){
      this.erroNome=true;
    }else{
      this.erroNome=false;
    }
  }

  validarCpf(){
    if(!this.usuario.cpf){
      this.usuario.cpf="";
    }
    this.numCpf = parseInt(this.usuario.cpf);
    if(this.usuario.cpf.length!=11 || isNaN(this.numCpf)){
      this.erroCpf = true;
    }else{
      this.erroCpf = false;
    }
  }

  validarTelefone(){
    if(!this.usuario.telefone){
      this.usuario.telefone = "";
    }
    this.numTelefone = parseInt(this.usuario.telefone);
    if(this.usuario.telefone.length<10 || this.usuario.telefone.length>11 || isNaN(this.numTelefone)){
      this.erroTelefone = true;
    }else{
      this.erroTelefone = false;
    }
  }

  validarCep(){
    if(!this.usuario.cep){
      this.usuario.cep = "";
    }
    this.numCep = parseInt(this.usuario.cep);
    if(this.usuario.cep.length!=8 || isNaN(this.numCep)){
      this.erroCep = true;
    }else{
      this.erroCep = false;
    }
  }

  validarLogradouro(){
    if(!this.usuario.logradouro){
      this.usuario.logradouro = "";
    }
    if(this.usuario.logradouro.length>=3 && this.usuario.logradouro.length<=150){
      this.erroLogradouro=false;
    }else{
      this.erroLogradouro=true;
    }
  }

  validarNumResidencia(){
    if(!this.usuario.numResidencia){
      this.usuario.numResidencia = "";
    }
    if(this.usuario.numResidencia.length>=1){
      this.erroNumResidencia = false;
    }else{
      this.erroNumResidencia = true;
    }
  }

  validarEstado(){
    if(!this.usuario.estado){
      this.usuario.estado = "";
    }
    if(this.usuario.estado.length>=2 && this.usuario.estado.length<=20){
      this.erroEstado=false;
    }else{
      this.erroEstado=true;
    }
  }

  validarCidade(){
    if(!this.usuario.cidade){
      this.usuario.cidade = "";
    }
    if(this.usuario.cidade.length>=2 && this.usuario.cidade.length<=50){
      this.erroCidade=false;
    }else{
      this.erroCidade=true;
    }
  }

  validarBairro(){
    if(!this.usuario.bairro){
      this.usuario.bairro = "";
    }
    if(this.usuario.bairro.length>=3 && this.usuario.bairro.length<=50){
      this.erroBairro=false;
    }else{
      this.erroBairro=true;
    }
  }

  validarEmail(){
    if(!this.usuario.email){
      this.usuario.email = "";
    }
    if(this.usuario.email.length>3 || this.usuario.email.length<50 || this.usuario.email.indexOf("@")==-1 || this.usuario.email.indexOf(".")==-1){
      this.erroEmail=true;
    }else{
      this.erroEmail=false;
    }
  }

  cadastrar(){
    this.usuarioService.postUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      location.assign('/lista-de-usuarios')
    })
  }
  
}
