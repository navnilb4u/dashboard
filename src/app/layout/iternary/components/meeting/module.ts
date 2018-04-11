import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../../../../shared/modules/demo-utils/module';
import { MeetingComponent } from './meeting.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      DemoUtilsModule
    ],
    declarations: [MeetingComponent],
    exports: [MeetingComponent]
  })

  export class MeetingModule{}