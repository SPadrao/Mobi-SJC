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
// import { OrigemDestinoComponent } from './origem-destino/origem-destino.component';
import { CreateRideFormComponent } from './create-ride-form/create-ride-form.component';
//import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ProfilePublicComponent } from './profile-public/profile-public.component';
import { environment } from '../environments/environment';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { AuthService } from './shared/auth.service';
import { PrivateProfileComponent } from './private-profile/private-profile.component';
import { MenuuComponent } from './menuu/menuu.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';
import { ToastrModule } from 'ngx-toastr';
import { NotifierComponent } from './notifier/notifier.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { HistoricoCaronasComponent } from './historico-caronas/historico-caronas.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component'; 
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaronaComponent,
    HomeComponent,
    // OrigemDestinoComponent,
    CreateRideFormComponent,
    ProfilePublicComponent,
    VerificarEmailComponent,
    PrivateProfileComponent,
    MenuuComponent,
    NotifierComponent,
    ScheduleEditComponent,
    HistoricoCaronasComponent,
    FeedbackListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot({

    })
  ],
  providers: [
    AuthService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
