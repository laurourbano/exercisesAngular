import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { RevistaComponent } from './ngSwitch/revista/revista.component';
import { LivroComponent } from './ngSwitch/livro/livro.component';
import { FilmeComponent } from './ngSwitch/filme/filme.component';
import { ProdutoComponent } from './ngSwitch/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    InterpolationComponent,
    RevistaComponent,
    LivroComponent,
    FilmeComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
