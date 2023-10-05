import { NgModule } from '@angular/core';
import { CommonModule, ɵPLATFORM_BROWSER_ID } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


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
  ],
  exports: [ContactComponent]
})
export class ContactModule {
  constructor(){
    console.log("CONTACT MODULE LOADED")
  }
 }
