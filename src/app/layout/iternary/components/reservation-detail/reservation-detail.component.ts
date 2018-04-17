import { Component, OnChanges, Input } from '@angular/core';
import {Event} from '../../../../shared/services/event'
//import {IternaryService} from '../../../../shared/services/iternary.service'
import{Iternary} from '../../../../shared/services/iternary'

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnChanges {
  
  @Input() iternary:Iternary;

  constructor() { }

  reservations : Event[];
  reservation= new Event();
  selectedRsrvns : Event;

  ngOnChanges() {
    //this.reservations=this.iternaryService.getReservation();
    this.reservations=this.iternary.reservations;
    this.showDefaultReservation();
  }

  addReservation(){
    this.iternary.reservations.push(Object.assign({}, this.reservation));
    //this.iternary.addReservation(this.reservation);
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
