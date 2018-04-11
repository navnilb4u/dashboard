import { Component, OnInit } from '@angular/core';
import { Person } from '../../../../shared/services/person';

import { IternaryService } from '../../../../shared/services/iternary.service'

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor(private iternaryService: IternaryService) { }


  person : Person;
  submitted = false;

  ngOnInit() {
    this.person = this.iternaryService.getPerson();
    if(this.person.firstName){
      this.submitted = true;
    }
    
  }

  onSubmit() {
    this.submitted = true;
    this.iternaryService.addPerson(this.person)
  }
  editPerson() { this.submitted = false; }

}
