import { Person } from './person'
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { EventColor, EventAction } from 'calendar-utils';

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

export class Event implements CalendarEvent {

    constructor() {
        this.initEvent();
    }

    id: number;
    type: string;
    name: string;
    confirmationNumber: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    startDateTime: string;
    endDateTime: string;
    phone: string;
    from: string;
    to: string;
    attendee: Person = new Person();

    start: Date = new Date();
    end: Date = new Date();
    title: string;
    color: EventColor;
    actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;

    initEvent(){
        this.addDates();
        this.color = {
            primary: '#ad2121',
            secondary: '#FAE3E3'
          };
        this.draggable= true;
        this.resizable = {
            beforeStart: true,
            afterEnd: true
          }
    }
    addDates() {
        this.start = addHours(startOfHour(new Date()), 1);
        this.end = addHours(this.start, 1);
    }

}