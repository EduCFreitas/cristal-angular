import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss']
})
export class ListaDeUsuariosComponent implements OnInit {
  
  listaUsuarios:Usuario[]
  usuario:Usuario = new Usuario()
  
  alerta:boolean = false
  
  constructor(private usuarioService:UsuarioService, private router:Router) { }
  
  ngOnInit() {
    let item:string = sessionStorage.getItem('delOk')
    let token = sessionStorage.getItem('token')
    let tipoUsuario = sessionStorage.getItem('tipoUsuario');
    
    if(token==null || tipoUsuario!='admin'){
      alert('Página disponível apenas para administradores do site!');
      if(token==null){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/home']);
      }
    }

    if (item=="true"){
      this.alerta = true
      sessionStorage.removeItem('delOk')
      // localStorage.clear()
      setTimeout(()=>{
        location.assign('lista-de-usuarios')
      }, 4000)
    }
    
    this.findAllUsuarios()
    
  }
  
  findAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((resp:Usuario[])=>{
      this.listaUsuarios = resp
    })
  }
  
}
