import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaronaComponent } from './carona/carona.component';
import { HomeComponent } from './home/home.component';
import { LoginCaronasP1Component } from './login-caronas-p1/login-caronas-p1.component';
import { OrigemDestinoComponent } from './origem-destino/origem-destino.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaronaComponent,
    HomeComponent,
    LoginCaronasP1Component,
    OrigemDestinoComponent,
    CreateRideFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
