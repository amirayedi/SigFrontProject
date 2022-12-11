import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestioncontenuComponent } from './gestioncontenu/gestioncontenu.component';
import { GestionstreamerComponent } from './gestionstreamer/gestionstreamer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TabledashboardComponent } from './tabledashboard/tabledashboard.component';

const routes: Routes = [
  { path: 'tabledashboard', redirectTo: 'home'  , pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tabledashboard', component: TabledashboardComponent },
  { path: 'gestionstreamer', component: GestionstreamerComponent },
  { path: 'gestioncontenu', component: GestioncontenuComponent },
  { path: '', component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
