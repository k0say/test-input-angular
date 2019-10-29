import { Component, Output } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //parentMessage=""
  public persona: Person

  constructor() {
    this.persona = new Person();
    this.persona.id = "1";
    this.persona.name = "gino"
  }
  
}
