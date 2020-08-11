import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotifiPage } from './addnotifi.page';

describe('AddnotifiPage', () => {
  let component: AddnotifiPage;
  let fixture: ComponentFixture<AddnotifiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotifiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
