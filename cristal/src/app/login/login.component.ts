import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	usuarioLogin:UsuarioLogin = new UsuarioLogin();
	
	erro:boolean=false;
	
	constructor(private authService:AuthService, private router:Router) { }
	
	ngOnInit(): void {
		
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
	
	logar(){
		this.erro=true;
		this.authService.logarUsuario(this.usuarioLogin).subscribe((resp:UsuarioLogin)=>{
			this.usuarioLogin = resp;
			sessionStorage.setItem('token', this.usuarioLogin.token);
			sessionStorage.setItem('idUsuario', this.usuarioLogin.id.toString());
			sessionStorage.setItem('nomeUsuario', this.usuarioLogin.nome);
			sessionStorage.setItem('email', this.usuarioLogin.email);
			sessionStorage.setItem('cpf', this.usuarioLogin.cpf);
			sessionStorage.setItem('tipoUsuario', this.usuarioLogin.tipo);
			this.erro=false;
			this.router.navigate(['/home']);
		}, err =>{
			alert('Houve um erro ao entrar, verifique o e-mail e a senha');
		});
	}

	enviaNovaSenha(){
		// this.router.navigate(['/home']);
		alert('Enviado email de recuperação de senha para o endereço informado!');
	}
	
}
