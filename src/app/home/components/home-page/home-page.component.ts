import { Component } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  expArray: Experience[] = [
    {
      img: "assets/img/nautilus.png",
      content: "J'ai effectué une alternance d'un an chez Nautilus pour suivre la formation CDA (Concepteur Développeur d'Application).\
      Mes principales missions étaient de réaliser du développement sur des sites web afin d'y ajouter des fonctionnalités demandées par le client. De plus, j'avais la responsabilité de travailler sur mon projet de fin d'année lorsque je n'avais pas de demandes spécifiques de la part des clients.",
    },
    {
      img: "assets/img/inotech.png",
      content: "J'ai effectué un stage de 2 mois chez Inotech pendant ma formation en DWWM (Développeur Web et Web Mobile).\
      Mes principales missions étaient de réaliser du développement sur un site de location de voiture en y ajoutant une fonctionnalité code promos et devis.",
    },
    {
      img: "assets/img/afpar.png",
      content: "J'ai effectué une formation de 9 mois en DWWM (Développeur Web et Web Mobile) afin d'approfondir mes connaissances en développement web."
    },
    {
      img: "assets/img/afpar.png",
      content: "J'ai effectué une formation de 6 mois en tant que digital codeur pour acquérir les bases de la programmation et comprendre tout l'écosystème informatique lié au web.",
    },
  ]
}
