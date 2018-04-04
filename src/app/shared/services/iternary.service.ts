import { Injectable } from '@angular/core';

import {Person} from './person'
import {Event} from './event'

@Injectable()
export class IternaryService {

  constructor() { }

  person : Person;

  reservations:Event[]=[];
  bookings:Event[]=[];
  meetings:Event[]=[];

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
    return this.meetings; 
  }

  addMeeting(meeting:Event){
    this.meetings.push(Object.assign({}, meeting));
  }
}
