import { Component, OnInit } from '@angular/core';
import {IternaryService} from '../../../../shared/services/iternary.service'
import {Event} from '../../../../shared/services/event'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor(private iternaryService: IternaryService) { }

  meetings : Event[];
  meeting= new Event();
  selectedMeeting : Event;


  ngOnInit() {
    this.meetings=this.iternaryService.getMeetings();
    this.showDefaultMeeting();
  }

  addMeeting(){
    this.iternaryService.addMeeting(this.meeting);
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
