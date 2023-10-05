import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactComponent  {
  unSaved: boolean = true; 
  constructor() { 
    console.log("INSIDE Contact COMPONENT ")
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.unSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
       return (result);
    }
    return true;
}  
}
