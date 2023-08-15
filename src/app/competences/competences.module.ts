import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencesRoutingModule } from './competences-routing.module';
import { CompetencesPagesComponent } from './components/competences-pages/competences-pages.component';


@NgModule({
  declarations: [
    CompetencesPagesComponent
  ],
  imports: [
    CommonModule,
    CompetencesRoutingModule
  ]
})
export class CompetencesModule { }
