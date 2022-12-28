import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GestioncontenuComponent } from './gestioncontenu/gestioncontenu.component';
import { GestionstreamerComponent } from './gestionstreamer/gestionstreamer.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { ProfilComponent } from './profil/profil.component';
import { RegistrationStreamerComponent } from './registration-streamer/registration-streamer.component';
import { RegistrationComponent } from './registration/registration.component';
import { TabledashboardComponent } from './tabledashboard/tabledashboard.component';

const routes: Routes = [
  { path: 'tabledashboard', redirectTo: 'home'  , pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'modifieruser/:id', component: ModifierUserComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registrationstreamer', component: RegistrationStreamerComponent },
  { path: 'tabledashboard', component: TabledashboardComponent },
  { path: 'gestionstreamer', component: GestionstreamerComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'gestioncontenu', component: GestioncontenuComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: '', component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
