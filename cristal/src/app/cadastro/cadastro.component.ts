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

  erroSenha:boolean=false;

  confirmacao = {
    senha:''
  }
  
  constructor(private usuarioService:UsuarioService)  { }
  
  ngOnInit(): void {
  }
  
  validar(){
    if(this.usuario.senha===this.confirmacao.senha){
      this.erroSenha=false;
      this.cadastrar();
    }else{
      this.erroSenha=true;
    }
  }

  cadastrar(){
    this.usuarioService.postUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp;
      location.assign('/lista-de-usuarios');
    })
  }
  
}
