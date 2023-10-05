import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { ContactComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

export default RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class ContactRoutingModule { }
