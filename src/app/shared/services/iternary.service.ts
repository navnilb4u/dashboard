import { Injectable } from '@angular/core';

import {Person} from './person'
import {Event} from './event'

import {Iternary} from './iternary'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IternaryService {

  constructor() { }

  iternary:Iternary;
  iternaries:Iternary[]=[];

  person : Person;

  reservations:Event[]=[];
  bookings:Event[]=[];
  meetings:Event[]=[];

  refresh: Subject<any> = new Subject();

  getIternary():Iternary {
    if(this.iternary == null){
      this.iternary = new Iternary();
    }
    return this.iternary;
  }

  addPerson(person : Person){
    this.person = person;
  }

  getPerson():Person {
    if(this.person==null){
      this.person = new Person();
    }
    return this.person;
  }

  getReservation():Event[]{
    return this.reservations; 
  }

  addReservation(reservation:Event){
    this.reservations.push(Object.assign({}, reservation));
  }

  getHotelBookings():Event[]{
    return this.bookings; 
  }

  addHotelBooking(booking:Event){
    this.bookings.push(Object.assign({}, booking));
  }

  getMeetings():Event[]{
    // this.meetings = [];
    // for (let index = 0; index < this.iternaries.length; index++) {
    //   //Iternary iternary = this.iternaries[index];
    //   this.meetings.concat(this.iternaries[index].meetings)
    // }
    return this.meetings; 
  }

  addMeeting(meeting:Event){
    this.meetings.push(Object.assign({}, meeting));
  }

  getIternaries():Iternary[]{
    return this.iternaries; 
  }

  addIternaries(iternary:Iternary){
    //this.meetings = this.meetings.concat(iternary.meetings)
    console.info("=====>>> "+this.meetings.length)
    this.iternaries.push(Object.assign({}, iternary));
    this.refresh.next();
  }
}
