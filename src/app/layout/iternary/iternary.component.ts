import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { IternaryService } from '../../shared/services/iternary.service'

import { Iternary } from '../../shared/services/iternary'

@Component({
    selector: 'app-iternary',
    templateUrl: './iternary.component.html',
    styleUrls: ['./iternary.component.scss']
})
export class IternaryComponent implements OnInit {
    constructor(private iternaryService: IternaryService) { }

    iternary: Iternary;
    isEditIternary = false;

    iternaries: Iternary[];


    ngOnInit() {
        //this.iternary = this.iternaryService.getIternary();
        this.iternaries = this.iternaryService.getIternaries();
        this.isEditIternary = false;
        this.iternary = new Iternary();
    }

    editIternary() {
        this.iternary = new Iternary();
        this.isEditIternary = true;
    }

    saveIternary() {
        if (this.iternary.person
            && this.iternary.person.firstName
            && this.iternary.person.lastName
            && !this.iternary.id) {
            this.iternary.id = uuid();
            this.iternaryService.addIternaries(this.iternary);

        }
        this.iternary = new Iternary();
        this.isEditIternary = false;
    }

    cancelIternary() {
        this.iternary = new Iternary();
        this.isEditIternary = false;
    }

    onSelect(indx: number) {
        this.iternary = this.iternaries[indx];
        this.isEditIternary = true;
    }
}
