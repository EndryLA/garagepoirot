import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCrudComponent } from './cars-crud.component';

describe('CarsCrudComponent', () => {
  let component: CarsCrudComponent;
  let fixture: ComponentFixture<CarsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
