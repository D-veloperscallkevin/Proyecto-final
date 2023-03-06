import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FrasesComponent } from './frases/frases.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeContenidoComponent } from './home-contenido/home-contenido.component';
import { FrasesIntroComponent } from './frases-intro/frases-intro.component';
import { FrasesContenidoComponent } from './frases-contenido/frases-contenido.component';
import { ContactoIntroComponent } from './contacto-intro/contacto-intro.component';
import { ContactoContenidoComponent } from './contacto-contenido/contacto-contenido.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FrasesComponent,
    ContactoComponent,
    HomeIntroComponent,
    HomeContenidoComponent,
    FrasesIntroComponent,
    FrasesContenidoComponent,
    ContactoIntroComponent,
    ContactoContenidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
