import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IternaryComponent } from './iternary.component';

describe('IternaryComponent', () => {
    let component: IternaryComponent;
    let fixture: ComponentFixture<IternaryComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [IternaryComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IternaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
