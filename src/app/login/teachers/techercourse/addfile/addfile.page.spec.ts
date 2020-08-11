import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfilePage } from './addfile.page';

describe('AddfilePage', () => {
  let component: AddfilePage;
  let fixture: ComponentFixture<AddfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
