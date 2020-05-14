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

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.findAllUsuarios()
  }

  findAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((resp:Usuario[])=>{
      this.listaUsuarios = resp
    })
  }

}
