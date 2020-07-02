import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ItemProdutoComponent } from './item-produto/item-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { CreateItemProdutoComponent } from './create-item-produto/create-item-produto.component';
import { EditarItemProdutoComponent } from './editar-item-produto/editar-item-produto.component';
import { DeletarItemProdutoComponent } from './deletar-item-produto/deletar-item-produto.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarrinhoComponent } from './carrinho/carrinho.component';

  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroComponent,
    ContatoComponent,
    FaqComponent,
    HomeComponent,
    LoginComponent,
    PoliticaDePrivacidadeComponent,
    ProdutosComponent,
    FooterComponent,
    SobreNosComponent,
    ItemProdutoComponent,
    ListaDeUsuariosComponent,
    EditarUsuarioComponent,
    DeletarUsuarioComponent,
    CreateItemProdutoComponent,
    EditarItemProdutoComponent,
    DeletarItemProdutoComponent,
    CarrinhoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule, 
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
