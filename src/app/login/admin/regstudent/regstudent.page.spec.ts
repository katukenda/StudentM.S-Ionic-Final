import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstudentPage } from './regstudent.page';

describe('RegstudentPage', () => {
  let component: RegstudentPage;
  let fixture: ComponentFixture<RegstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegstudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
