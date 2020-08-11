import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendencePage } from './attendence.page';

describe('AttendencePage', () => {
  let component: AttendencePage;
  let fixture: ComponentFixture<AttendencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
