import { Component, OnInit } from '@angular/core';
import { UsuarioLoginService } from '../service/usuario-login.service';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	usuarioLogin:UsuarioLogin = new UsuarioLogin();
	
	erro:boolean=false;
	
	constructor(private usuarioLoginService:UsuarioLoginService) { }
	
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
		this.usuarioLoginService.postUsuarioLogin(this.usuarioLogin).subscribe((resp:UsuarioLogin)=>{
			this.usuarioLogin = resp;
			this.erro=false;
			location.assign('/home');
		})
	}
	
}
