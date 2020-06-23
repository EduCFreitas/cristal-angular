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
    let item:string = localStorage.getItem('delOk')
    let token = localStorage.getItem('token')

    if(token==null){
      alert('Faça o login antes de acessar a página Feed');
      this.router.navigate(['/login']);
    }

    if (item=="true"){
      this.alerta = true
      localStorage.clear()
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
