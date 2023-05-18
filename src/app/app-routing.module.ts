import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
