import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPageComponent } from './services-page/services-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,RouterModule
  ]
})
export class ServicesModule { 
  constructor(){
    console.log("SERVICES MODULE LOADED")
  }
}
