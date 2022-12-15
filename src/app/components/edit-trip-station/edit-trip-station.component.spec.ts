import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTripStationComponent } from './edit-trip-station.component';

describe('EditTripStationComponent', () => {
  let component: EditTripStationComponent;
  let fixture: ComponentFixture<EditTripStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTripStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTripStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
