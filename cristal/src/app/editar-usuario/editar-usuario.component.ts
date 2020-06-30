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
  
  
  usuario: Usuario = new Usuario();
  
  
  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    // pegar na rota ativa (API) o item pelo ID
    let id = this.route.snapshot.params['id']
    let token = sessionStorage.getItem('token')
    
    if(token==null){
      alert('Faça o login antes de acessar a página');
      this.router.navigate(['/login']);
    }
    
    this.findById(id)
    
  }
  
  findById(id:number){
    this.usuarioService.getUsuarioById(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    }, err =>{
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }
  
  salvar(){
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp;
      this.router.navigate(['/home']);
      alert('Alterações realizadas com sucesso!');
    }, err =>{
			alert('Houve um erro ao salvar as alterações, favor verificar os dados');
		})
  }
  
}
