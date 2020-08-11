import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechercoursePage } from './techercourse.page';

describe('TechercoursePage', () => {
  let component: TechercoursePage;
  let fixture: ComponentFixture<TechercoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechercoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechercoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
