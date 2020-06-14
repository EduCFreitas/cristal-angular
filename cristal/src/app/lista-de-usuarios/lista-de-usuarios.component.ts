import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss']
})
export class ListaDeUsuariosComponent implements OnInit {

  listaUsuarios:Usuario[]
  usuario:Usuario = new Usuario()

  alerta:boolean = false

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.findAllUsuarios()
    let item:string = localStorage.getItem('delOk')
    if (item=="true"){
      this.alerta = true
      localStorage.clear()
      setTimeout(()=>{
        location.assign('lista-de-usuarios')
      }, 4000)
     
    }
    
  }

  findAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((resp:Usuario[])=>{
      this.listaUsuarios = resp
    })
  }

}
