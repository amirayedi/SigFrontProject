import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NavbarComponent } from './navbar/navbar.component';
import { TabledashboardComponent } from './tabledashboard/tabledashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { GestionstreamerComponent } from './gestionstreamer/gestionstreamer.component';
import {HttpClientModule} from '@angular/common/http';
import { GestioncontenuComponent } from './gestioncontenu/gestioncontenu.component';
import { RegistrationStreamerComponent } from './registration-streamer/registration-streamer.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormpopupComponent } from './formpopup/formpopup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    
    NavbarComponent,
    TabledashboardComponent,
    RegistrationComponent,
    LoginComponent,
    AboutusComponent,
    GestionstreamerComponent,
    GestioncontenuComponent,
    RegistrationStreamerComponent,
    HistoriqueComponent,
    ProfilComponent,
    ModifierUserComponent,
    EditProfileComponent,
    FormpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    GoogleMapsModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
