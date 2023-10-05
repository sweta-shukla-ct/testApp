import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'services-page',
        component: ServicesPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
