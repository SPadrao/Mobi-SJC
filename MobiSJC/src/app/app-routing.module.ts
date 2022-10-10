import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaronaComponent } from './carona/carona.component';
import { HomeComponent } from './home/home.component';
import { LoginCaronasP1Component } from './login-caronas-p1/login-caronas-p1.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path: 'registrarCarona', component: CreateRideFormComponent},
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'login-caronas-p1', component: LoginCaronasP1Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
