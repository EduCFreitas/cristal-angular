import { Usuario } from './../model/Usuario';
import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  
  
  usuario: Usuario = new Usuario;


  constructor(private editarUsuario: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
// pegar na rota ativa (API) o item pelo ID
    let id = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id:number){
    this.editarUsuario.getUsuarioById(id).subscribe((res: Usuario)=>{
      this.usuario = res
      console.log(res)
      console.log(this.usuario)
    })
  }

  salvarEdicao(){
    this.editarUsuario.putUsuarios(this.usuario).subscribe((res: Usuario)=>{
      this.usuario = res
      this.router.navigate(['/feed'])
      location.assign('/feed')
    })
  }

}
