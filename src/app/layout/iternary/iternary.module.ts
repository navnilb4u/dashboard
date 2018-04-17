import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IternaryRoutingModule } from './iternary-routing.module';
import { IternaryComponent } from './iternary.component';

import { DemoUtilsModule } from '../../shared/modules/demo-utils/module';

import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';
import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component';
import {MeetingModule} from './components/meeting/module';
import { IternaryDetailsComponent } from './components/iternary-details/iternary-details.component'

@NgModule({
    imports: [CommonModule,FormsModule,
         IternaryRoutingModule,
         MeetingModule,
         DemoUtilsModule
         ],
    declarations: [IternaryComponent, 
        PersonDetailComponent,
        ReservationDetailComponent,
        HotelBookingComponent,
        IternaryDetailsComponent]
})
export class IternaryModule {}
