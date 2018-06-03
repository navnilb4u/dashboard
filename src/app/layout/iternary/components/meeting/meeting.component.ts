import { Component, OnChanges, Input } from '@angular/core';

import {Event} from '../../../../shared/services/event'
import{Iternary} from '../../../../shared/services/iternary'
import { IternaryService } from '../../../../shared/services/iternary.service'

import {
  startOfDay,
  endOfHour,
  addMinutes,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfHour
} from 'date-fns';
import { EventColor, EventAction } from 'calendar-utils';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnChanges {
  @Input() iternary:Iternary;

  constructor(private iternaryService: IternaryService) { }

  meetings : Event[];
  meeting:Event= this.emptyEvent();

  selectedMeeting : Event;

  emptyEvent(){
    return {
      title: 'New event',
      start: new Date(),
      end: new Date(),
      attendee: {
        firstName: '',
        lastName:''
      },
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    } as Event
  }
  ngOnChanges() {
    this.meetings=this.iternary.meetings;
    //this.showDefaultMeeting();
  }

  addMeeting(){
    this.iternaryService.addMeeting(this.meeting);
    this.iternary.meetings.push(Object.assign({}, this.meeting));
    this.meetings=this.iternary.meetings;
    this.meeting= this.emptyEvent();
    //this.showDefaultMeeting();
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
