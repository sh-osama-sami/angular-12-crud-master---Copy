import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationEditComponent } from './station-edit.component';

describe('StationEditComponent', () => {
  let component: StationEditComponent;
  let fixture: ComponentFixture<StationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
