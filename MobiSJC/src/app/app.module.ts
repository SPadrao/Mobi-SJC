import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaronaComponent } from './carona/carona.component';
import { HomeComponent } from './home/home.component';
import { LoginCaronasP1Component } from './login-caronas-p1/login-caronas-p1.component';
import { OrigemDestinoComponent } from './origem-destino/origem-destino.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { PrivateProfileComponent } from './private-profile/private-profile.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ProfilePublicComponent } from './profile-public/profile-public.component';

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
    CreateRideFormComponent,
    PrivateProfileComponent,
    ProfilePublicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
