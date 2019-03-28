import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'private', component: PrivateComponent, canActivate:[AuthGuard], children:[
      { path: 'noticias-list', component: NoticiasListComponent },
      { path: 'noticias-edit/:id', component: NoticiasUpsertComponent },
      { path: 'noticias-insert', component: NoticiasUpsertComponent },
  ] },
  { path: '**', component: NoticiasListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
