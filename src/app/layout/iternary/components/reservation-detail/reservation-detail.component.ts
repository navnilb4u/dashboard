import { Component, OnInit } from '@angular/core';
import {Event} from '../../../../shared/services/event'
import {IternaryService} from '../../../../shared/services/iternary.service'

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  constructor(private iternaryService: IternaryService) { }

  reservations : Event[];
  reservation= new Event();
  selectedRsrvns : Event;

  ngOnInit() {
    this.reservations=this.iternaryService.getReservation();
    this.showDefaultReservation();
  }

  addReservation(){
    this.iternaryService.addReservation(this.reservation);
    this.reservation= new Event();
    this.showDefaultReservation();
  }

  selectedReservation(selected:Event){
    this.selectedRsrvns = selected;
  }


  showDefaultReservation(){
    if(this.reservations.length>0 && !this.selectedRsrvns){
      this.selectedRsrvns =  this.reservations[0];
    }
  }


}
