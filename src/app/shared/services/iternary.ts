import { Person } from './person'
import { Event } from './event'

export class Iternary {
    constructor() {
    }

    id: string;
    person: Person;
    reservations: Event[] = [];
    bookings: Event[] = [];
    meetings: Event[] = [];

    createPerson(person: Person){
        this.person = Object.assign({}, person);
    }
    getReservation(): Event[] {
        return this.reservations;
    }

    addReservation(reservation: Event) {
        this.reservations.push(Object.assign({}, reservation));
    }

    getHotelBookings(): Event[] {
        return this.bookings;
    }

    addHotelBooking(booking: Event) {
        this.bookings.push(Object.assign({}, booking));
    }

    getMeetings(): Event[] {
        return this.meetings;
    }

    addMeeting(meeting: Event) {
        this.meetings.push(Object.assign({}, meeting));
    }

}