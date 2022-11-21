import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceappointmentsComponent } from './placeappointments.component';

describe('PlaceappointmentsComponent', () => {
  let component: PlaceappointmentsComponent;
  let fixture: ComponentFixture<PlaceappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceappointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
