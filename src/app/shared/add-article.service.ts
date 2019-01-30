import { Injectable } from '@angular/core';
//Import de firestor
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AddArticleService {
  // (1*)Permet de créer une methode qui pourra récupérer nos données sur notre base de donnée FireBase
  constructor(private firestore :AngularFirestore) { }

  getArticles(){
    //Méthode qui permet d'extraire les données disponibles de la collection "articles" de notre base de données (j'appelerai cette methode dans un component.ts afin d'afficher les document dans un template)
    return this.firestore.collection('articles').snapshotChanges(); //recupere aussi l'Id
  }

  //Methode d'ajout d'article
  createArticle(a){
    return this.firestore.collection('articles').add(a);
  }
  //Methode pour supprimer l'id (donct tout le document)
  suppArticle(id){
    return this.firestore.collection('articles').doc(id).delete();
  }
}
