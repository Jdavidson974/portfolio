import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent,
    children: [
      { path: "", loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      { path: "mes-competences", loadChildren: () => import('../competences/competences.module').then(m => m.CompetencesModule), },
      { path: "mes-projets", loadChildren: () => import('../projet/projet.module').then(m => m.ProjetModule), },
      { path: "contact", loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule), },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
