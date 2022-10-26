import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { CaronaComponent } from './carona/carona.component';
import { HomeComponent } from './home/home.component';
import { LoginCaronasP1Component } from './login-caronas-p1/login-caronas-p1.component';
import { LoginComponent } from './views/login/login.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { PrivateProfileComponent } from './private-profile/private-profile.component';
import { OrigemDestinoComponent } from './origem-destino/origem-destino.component';
import { ProfilePublicComponent } from './profile-public/profile-public.component';


const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'registrarCarona', component: CreateRideFormComponent},
  {path: 'PrivateProfile', component: PrivateProfileComponent},
  {path: 'perfilPublico', component: ProfilePublicComponent},
  {path: 'origemDestino', component: OrigemDestinoComponent},
  {path: 'CaronaComponent', component: CaronaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
