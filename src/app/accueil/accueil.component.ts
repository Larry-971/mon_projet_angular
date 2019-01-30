import { Component, OnInit } from '@angular/core';
//Import de mon service afin de pouvoir le consommer et lister mes articles sur le templates
import { AddArticleService } from '../shared/add-article.service';
//Import de l'objet map de rxjs
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles;
  constructor(private addArticleService: AddArticleService) { }

  ngOnInit() {
    this.articles = this.addArticleService.getArticles().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data};
    }))
    );
  }

}
