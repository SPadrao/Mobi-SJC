import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EsqueceuSenhaComponent } from './component/esqueceu-senha/esqueceu-senha.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path : 'varify-email', component : VarifyEmailComponent},
  {path: 'esqueceu-senha', component : EsqueceuSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
