import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuenrollPage } from './stuenroll.page';

describe('StuenrollPage', () => {
  let component: StuenrollPage;
  let fixture: ComponentFixture<StuenrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuenrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuenrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
