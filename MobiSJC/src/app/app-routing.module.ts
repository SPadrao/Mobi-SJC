import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { PrivateProfileComponent } from './private-profile/private-profile.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path: 'registrarCarona', component: CreateRideFormComponent},
  {path: 'PrivateProfile', component: PrivateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
