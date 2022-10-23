import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaronaComponent } from './carona/carona.component';
import { HomeComponent } from './home/home.component';
import { LoginCaronasP1Component } from './login-caronas-p1/login-caronas-p1.component';
import { LoginComponent } from './views/login/login.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { OrigemDestinoComponent } from './origem-destino/origem-destino.component';
<<<<<<< Updated upstream
import { ProfilePublicComponent } from './profile-public/profile-public.component';
=======
>>>>>>> Stashed changes

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path: 'registrarCarona', component: CreateRideFormComponent},
<<<<<<< Updated upstream
  {path: 'origemDestino', component: OrigemDestinoComponent},
  {path: 'perfilPublico', component: ProfilePublicComponent}
=======
  {path: 'origemDestino', component: OrigemDestinoComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
