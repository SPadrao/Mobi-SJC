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
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'registrarCarona', component: CreateRideFormComponent},
  {path: 'origemDestino', component: OrigemDestinoComponent},
  {path: 'perfilPublico', component: ProfilePublicComponent},
  {path: 'carona', component: CaronaComponent},
  {path: 'perfilPrivado', component: PrivateProfileComponent},
  {path: 'loginP1', component: LoginCaronasP1Component},
  {path: 'verificar-email', component: VerificarEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
