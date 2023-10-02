import { Component } from '@angular/core';
import { skillsAray } from '../../models/skillsAray.model';

@Component({
  selector: 'app-competences-pages',
  templateUrl: './competences-pages.component.html',
  styleUrls: ['./competences-pages.component.scss']
})
export class CompetencesPagesComponent {

  frontArray: skillsAray[] = [
    {
      title: 'Html5',
      url: "assets/img/html5.png"
    },
    {
      title: 'Css3',
      url: "assets/img/css3.png"
    },
    {
      title: 'Javascript',
      url: "assets/img/javascript.png"
    },
    {
      title: 'Bootstrap',
      url: "assets/img/bootstrap.png"
    },
    {
      title: 'Tailwind',
      url: "assets/img/tailwind.png"
    },
    {
      title: 'Angular',
      url: "assets/img/angular.png"
    },
    {
      title: 'TypeScript',
      url: "assets/img/typescript.png"
    },
    {
      title: 'React',
      url: "assets/img/react.png"
    },
    {
      title: 'Flutter',
      url: "assets/img/flutter.png"
    },

  ];
  backArray: skillsAray[] = [
    {
      title: 'NestJs',
      url: "assets/img/nestjs.png"
    },
    {
      title: 'NodeJs',
      url: "assets/img/nodejs.png"
    },
    {
      title: 'Symfony 4 ',
      url: "assets/img/symfony.png"
    },
    {
      title: 'Laravel 8 ',
      url: "assets/img/laravel.png"
    },
    {
      title: 'Stripe',
      url: "assets/img/stripe.png"
    },

  ];
  bddArray: skillsAray[] = [
    {
      title: 'Mysql',
      url: "assets/img/mysql.png"
    },
    {
      title: 'Mongodb',
      url: "assets/img/mongo.png"
    }

  ];


}
