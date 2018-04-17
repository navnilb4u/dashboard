import { Component, OnChanges, Input } from '@angular/core';

import {Event} from '../../../../shared/services/event'
import{Iternary} from '../../../../shared/services/iternary'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnChanges {
  @Input() iternary:Iternary;

  constructor() { }

  meetings : Event[];
  meeting= new Event();
  selectedMeeting : Event;


  ngOnChanges() {
    this.meetings=this.iternary.meetings;
    this.showDefaultMeeting();
  }

  addMeeting(){
    //this.iternary.addMeeting(this.meeting);
    this.iternary.meetings.push(Object.assign({}, this.meeting));
    this.meetings=this.iternary.meetings;
    this.meeting= new Event();
    this.showDefaultMeeting();
  }

  selectMeeting(meeting:Event){
    this.selectedMeeting = meeting;
  }

  showDefaultMeeting(){
    if(this.meetings.length>0 && !this.selectedMeeting){
      this.selectedMeeting =  this.meetings[0];
    }
  }


}
