import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoComponent } from './produto/produto.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './exemplos/diretivas/diretivas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesComponent } from './exemplos/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ListaProdutosComponent,
    SobreComponent,
    ProdutoComponent,
    FooterComponent,
    DiretivasComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
