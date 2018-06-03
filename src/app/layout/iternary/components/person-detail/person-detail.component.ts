import { Component, OnChanges, Input } from '@angular/core';
import { Person } from '../../../../shared/services/person';

//import { IternaryService } from '../../../../shared/services/iternary.service'
import{Iternary} from '../../../../shared/services/iternary'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnChanges {

  @Input() iternary:Iternary;

  constructor() { }


  person : Person;
  submitted = false;

  ngOnChanges() {
    if (this.iternary.person == null){
      //this.iternary.person = new Person();
      this.person = new Person();
    }else {
      this.person = Object.assign({}, this.iternary.person);
    }
    
    //this.person = this.iternaryService.getPerson();
    
    if(this.person.firstName){
      this.submitted = true;
    }else{
      this.submitted = false;
    }
    
    
  }



  onSubmit(form: NgForm) {
    this.submitted = true;
    //this.iternaryService.addPerson(this.person)
    this.iternary.person=Object.assign({}, this.person);
    //this.iternary.createPerson(this.person);
    //this.iternary.person = this.person;
    
    form.reset();
    this.person = this.iternary.person;
  }
  editPerson(form: NgForm) { 
    this.submitted = false; 
    this.person = this.iternary.person;
    form.resetForm(this.person);
  }

}
