import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//Module pour mon formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//Base de donnée
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { Page404Component } from './page404/page404.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { FooterComponent } from './footer/footer.component';

//Import de mon service
import { AddArticleService } from './shared/add-article.service';

//Environment
import {environment } from '../environments/environment';

//Initation de ma constante pour gérer mes différentes routes
const mesRoutes:Routes = [
  {path:'accueil', component : AccueilComponent },
  {path:'presentation', component : PresentationComponent },
  {path:'contact', component : ContactComponent },
  {path:'admin', component : AdminComponent },
  //Afficher ma page accueil par defaut au chargement
  {path : '', component: AccueilComponent},
  {path : 'admin/nouvel_article', component : AjoutArticleComponent},
  //Affichage d'une page d'erreur TOUJOURS METTRE EN DERNIERE POSITION
  {path : "**", component : Page404Component}

]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PresentationComponent,
    ContactComponent,
    AdminComponent,
    Page404Component,
    AjoutArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Congiguration du RouterModule
    RouterModule.forRoot(mesRoutes),
    //Pour mon formulaire
    FormsModule,
    ReactiveFormsModule,
    //Configuration de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  //Ajout de mon service dans le tableau de 'providers'
  providers: [AddArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
