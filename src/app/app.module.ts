import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { FormGroup,ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { CompagnieFormulaireComponent } from './component/compagnie-formulaire/compagnie-formulaire.component';
=======
import { FormulaireLieuxComponent } from './formulaire-lieux/formulaire-lieux.component';
import { LieuxComponent } from './lieux/lieux.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FormulaireExperienceGeneraleComponent } from './formulaire-experience-generale/formulaire-experience-generale.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TrajetComponent } from './component/trajet/trajet.component';

>>>>>>> 6da28a29c2f15a90a5dd9506e5780c9b5e0d5acc

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    FormulaireInscriptionComponent,
    ConnexionFormulaireComponent,
    MainNavComponent,
<<<<<<< HEAD
    CompagnieFormulaireComponent 
=======
    FormulaireLieuxComponent,
    LieuxComponent,
    ExperienceComponent,
    FormulaireExperienceGeneraleComponent,
    RestaurantComponent,
  
>>>>>>> 6da28a29c2f15a90a5dd9506e5780c9b5e0d5acc

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule ,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
