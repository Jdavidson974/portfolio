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
      img: "assets/img/logo.png",
      content: "Projet Stanlinks , ce projet est fait avec Angular et NestJs pour l'API.\
      Ce projet est une plateforme de partage de liens destinée aux utilisateurs des réseaux sociaux, accessible via une page personnalisable.",
      link: "https://stlk.fr"
    },
    {
      img: "assets/img/hope.jpg",
      content: "Projet réservation sur site hope-location, sur ce site Wordpress j'ai dû ajouter un système de réservation en ligne avec paiement en ligne.\
      Le paiement en ligne est géré grâce à Stripe, tandis que les réservations sont effectuées à l'aide de shortcodes qui communiquent avec l'API d'un prestataire appelé MyRentalCar.",
      link: "https://www.hope-location.re",
    },
    {
      img: "assets/img/manzer.jpg",
      content: "Projet Manzer , ce projet est un projet fictif réalisé en formation, qui permet de la gestion de repas en ligne avec un compte Google.\
      Ce projet est fait avec Angular est NestJs pour L'API ",
      link: "https://ecf.sautronjeandavidson.re"
    },
    {
      img: "assets/img/logo.png",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, aliquam quidem autem veritatis,\
            architecto voluptatibus sit temporibus dolorum praesentium necessitatibus blanditiis doloremque ea iure\
            libero rerum dolores explicabo quas optio.",
    },

  ]
}
