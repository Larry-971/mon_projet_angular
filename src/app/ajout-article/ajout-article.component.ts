import { Component, OnInit } from '@angular/core';
import { ExtraLocaleDataIndex } from '@angular/common/src/i18n/locale_data';
//Import des modules pour créer mon formulaire
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//j'import mon service afin de bénéficier du service de création de nouvel article dans ma base
import { AddArticleService } from '../shared/add-article.service';


@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder : FormBuilder, private addArticleService : AddArticleService ) { }

  ngOnInit() {
    //Configuration des éléments du formulaire
    this.form = this.formBuilder.group({
      titre : ['', Validators.required],
      image : ['', Validators.required],
      para : ['', Validators.required],
      auteur : ['', Validators.required],
      parution : ['', Validators.required]
    })
  }

  addArticle(){
    if(this.form.valid){
      //Boucle pour récupérer le nom de l'image jusqu'au 12e caractères
      let image2 = [];
      for(let i = 12 ; i < this.form.value.image.length; i++){
        image2 += this.form.value.image[i];
      };

      //Création d'un objet articles dont les propriétés ont pour valeur les données récupéré via mon formulaire
      let article = {
        titre : this.form.value.titre,
        image : image2,
        para : this.form.value.para,
        auteur : this.form.value.auteur,
        parution : this.form.value.parution
      };
      //appele de ma methode "createArticle" afin d'inséré le nouvel article dans ma base de donnée
      this.addArticleService.createArticle(article);
      console.log(article);
    }
  }

  
}
