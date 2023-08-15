import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesPagesComponent } from './components/competences-pages/competences-pages.component';

const routes: Routes = [{ path: "", component: CompetencesPagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetencesRoutingModule { }
