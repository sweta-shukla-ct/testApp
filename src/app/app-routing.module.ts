import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
    {path:'contact-page',loadChildren: () => import('./contact/contact.module').then(x => x.ContactModule)},
  {path:'home-page',loadChildren: () => import('./home/home.module').then(x => x.HomeModule), pathMatch: 'full'},
  {path:'services-page',loadChildren: () => import('./services/services.module').then(x => x.ServicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
