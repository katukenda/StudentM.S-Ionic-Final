import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwfilesPage } from './veiwfiles.page';

describe('VeiwfilesPage', () => {
  let component: VeiwfilesPage;
  let fixture: ComponentFixture<VeiwfilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwfilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
