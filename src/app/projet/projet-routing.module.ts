import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetPageComponent } from './components/projet-page/projet-page.component';

const routes: Routes = [{ path: "", component: ProjetPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
