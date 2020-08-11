import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeassignPage } from './teassign.page';

describe('TeassignPage', () => {
  let component: TeassignPage;
  let fixture: ComponentFixture<TeassignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeassignPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeassignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
