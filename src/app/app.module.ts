import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat' 
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { EsqueceuSenhaComponent } from './component/esqueceu-senha/esqueceu-senha.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { CaronaInfoComponent } from './carona-info/carona-info.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CriarCorridaComponent } from './criar-corrida/criar-corrida.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EsqueceuSenhaComponent,
    VarifyEmailComponent,
    CaronaInfoComponent,
    InfoUsuarioComponent,
    PerfilUsuarioComponent,
    CriarCorridaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
