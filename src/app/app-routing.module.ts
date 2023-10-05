import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {path:'contact-page',loadChildren: () => import('./contact/contact-routing.module').then(x => x.ContactRoutingModule)},
  {path:'home-page',loadChildren: () => import('./home/home-routing.module').then(x => x.HomeRoutingModule), pathMatch: 'full'},
  {path:'services-page',loadChildren: () => import('./services/services-routing.module').then(x => x.ServicesRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
