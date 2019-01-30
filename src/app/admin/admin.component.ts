import { Component, OnInit } from '@angular/core';
//Import de mon service afin de pouvoir le consommer et lister mes articles sur le templates
import { AddArticleService } from '../shared/add-article.service';
//Import de l'objet map de rxjs
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  articles;
  //J'injecte mon service dans le constructor de mon component afin de pouvoir le consommer
  constructor(private addArticleService: AddArticleService) { }

  ngOnInit() {
    //j'appel ma methode 'getArticles()' pour récupérer les documents de ma base de donnée que je transmetterais à mon template
    //this.articles = this.addArticleService.getArticles();
    
    this.articles = this.addArticleService.getArticles().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );

  }//Fin de ngOnit

  //Methode de suppression d'un article
  removeArticle(id){
    if(confirm("Êtes vous sur de vouloir supprimer définitivement cet article ?")){
      this.addArticleService.suppArticle(id);
    }
  }

}
