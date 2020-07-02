import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ItemProdutoComponent} from './item-produto/item-produto.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CreateItemProdutoComponent } from './create-item-produto/create-item-produto.component';
import { EditarItemProdutoComponent } from './editar-item-produto/editar-item-produto.component';
import { DeletarItemProdutoComponent } from './deletar-item-produto/deletar-item-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
 
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
  {path: 'item-produto/:id', component: ItemProdutoComponent},
  {path: 'lista-de-usuarios', component: ListaDeUsuariosComponent},
  {path: 'editar-usuario/:id', component: EditarUsuarioComponent},
  {path: 'deletar-usuario/:id', component: DeletarUsuarioComponent},
  {path: 'criar-item-produto', component: CreateItemProdutoComponent},
  {path: 'editar-item-produto/:id', component: EditarItemProdutoComponent},
  {path: 'deletar-item-produto/:id', component: DeletarItemProdutoComponent},
  {path: 'carrinho', component: CarrinhoComponent}
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


