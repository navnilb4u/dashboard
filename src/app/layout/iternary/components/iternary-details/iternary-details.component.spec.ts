import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IternaryDetailsComponent } from './iternary-details.component';

describe('IternaryDetailsComponent', () => {
  let component: IternaryDetailsComponent;
  let fixture: ComponentFixture<IternaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IternaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IternaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
