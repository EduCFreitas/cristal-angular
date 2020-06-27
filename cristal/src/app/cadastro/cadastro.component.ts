import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  usuario:Usuario = new Usuario()
  
  erro:boolean=false;
  
  confirmacao = {
    senha:''
  }
  
  constructor(private authService:AuthService, private router:Router)  { }
  
  ngOnInit(): void {
    
    this.erro=false;
    
    function validarCpf() {
      let numbers = this.usuarioBuscar.login.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join('').length;
      }
      if (numberLength <= 11) {
        return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
      } else {
        return [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
      }
    }
    
    
    const inputs = document.querySelectorAll(".input");
    
    
    function addcl(){
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }
    
    function remcl(){
      let parent = this.parentNode.parentNode;
      if(this.value == ""){
        parent.classList.remove("focus");
      }
    }
    
    
    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }
  
  validar(){
    if(this.usuario.senha===this.confirmacao.senha){
      this.erro=false;
      this.cadastrar();
    }else{
      this.erro=true;
    }
  }
  
  cadastrar(){
    this.erro=true;
    this.authService.cadastrarUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.erro=false;
      this.usuario=resp;
      this.router.navigate(['/login']);
      alert('Cadastro realizado com sucesso!')
    })
  }
  
}
