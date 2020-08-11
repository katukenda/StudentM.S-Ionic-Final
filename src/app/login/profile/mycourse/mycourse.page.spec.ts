import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursePage } from './mycourse.page';

describe('MycoursePage', () => {
  let component: MycoursePage;
  let fixture: ComponentFixture<MycoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
