import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.scss']
})
export class DeletarUsuarioComponent implements OnInit {
  
  usuario:Usuario = new Usuario()
  delOk: boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.usuarioService.getUsuarioById(id).subscribe((resp: Usuario)=>{    
      this.usuario = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/lista-de-usuarios'])
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }

  btnNao(){
  this.router.navigate(['/lista-de-usuarios'])    
  }
}
