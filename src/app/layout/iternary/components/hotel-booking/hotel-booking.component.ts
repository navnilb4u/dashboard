import { Component, OnChanges, Input } from '@angular/core';
//import {IternaryService} from '../../../../shared/services/iternary.service'
import {Event} from '../../../../shared/services/event'
import{Iternary} from '../../../../shared/services/iternary'

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnChanges {

  @Input() iternary:Iternary;

  constructor() { }


  bookings : Event[];
  booking= new Event();
  selectedBooking : Event;

  ngOnChanges() {
    this.bookings=this.iternary.bookings;
    this.showDefaultBooking();
  }

  addHotelBooking(){
    //this.iternary.addHotelBooking(this.booking);
    this.iternary.bookings.push(Object.assign({}, this.booking));
    this.booking= new Event();
    this.showDefaultBooking();
  }

  selectBooking(booking:Event){
    this.selectedBooking = booking;
  }

  showDefaultBooking(){
    if(this.bookings.length>0 && !this.selectedBooking){
      this.selectedBooking =  this.bookings[0];
    }
  }



}
