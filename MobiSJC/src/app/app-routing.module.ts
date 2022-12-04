import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaronaComponent } from './carona/carona.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
import { PrivateProfileComponent } from './private-profile/private-profile.component';
import { OrigemDestinoComponent } from './origem-destino/origem-destino.component';
import { ProfilePublicComponent } from './profile-public/profile-public.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { MenuuComponent } from './menuu/menuu.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';
import { NotifierComponent } from './notifier/notifier.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastrar', component:CadastroComponent},
  {path: 'menu', component: MenuuComponent, canActivate:[AuthGuardGuard]},
  {path: 'registrarCarona', component: CreateRideFormComponent, canActivate:[AuthGuardGuard]},
  {path: 'origemDestino', component: OrigemDestinoComponent, canActivate:[AuthGuardGuard]},
  {path: 'perfilPublico', component: ProfilePublicComponent, canActivate:[AuthGuardGuard]},
  {path: 'carona', component: CaronaComponent, canActivate:[AuthGuardGuard]},
  {path: 'perfilPrivado', component: PrivateProfileComponent, canActivate:[AuthGuardGuard]},
  {path : 'verificar-email', component: VerificarEmailComponent, canActivate:[AuthGuardGuard]},
  {path : 'notifier', component: NotifierComponent, canActivate:[AuthGuardGuard]},
  {path: 'calendario-edit', component: ScheduleEditComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
