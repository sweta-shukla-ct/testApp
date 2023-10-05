import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact-page',
        component: ContactComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
