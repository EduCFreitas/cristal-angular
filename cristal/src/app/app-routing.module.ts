import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'login', component: LoginComponent},
  {path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'lista-de-usuarios', component: ListaDeUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
