import { Component } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing-jasmine-karma';

  person: Person;
  constructor(){
    
  }

  ngOnInit(){
    this.person = new Person(
      'Zulema',
      'Vicente',
      22,
      2,
      12
    );
  }
}
