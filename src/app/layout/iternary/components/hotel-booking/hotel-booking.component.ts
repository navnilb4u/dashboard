import { Component, OnInit } from '@angular/core';
import {IternaryService} from '../../../../shared/services/iternary.service'
import {Event} from '../../../../shared/services/event'

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {

  constructor(private iternaryService: IternaryService) { }

  bookings : Event[];
  booking= new Event();
  selectedBooking : Event;

  ngOnInit() {
    this.bookings=this.iternaryService.getHotelBookings();
    this.showDefaultBooking();
  }

  addHotelBooking(){
    this.iternaryService.addHotelBooking(this.booking);
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
