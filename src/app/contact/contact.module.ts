import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  bootstrap: [
    ContactComponent
  ]
})
export class ContactModule {
  constructor(){
    console.log("CONTACT MODULE LOADED")
  }
 }
