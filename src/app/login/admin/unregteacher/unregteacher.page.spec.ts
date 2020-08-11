import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregteacherPage } from './unregteacher.page';

describe('UnregteacherPage', () => {
  let component: UnregteacherPage;
  let fixture: ComponentFixture<UnregteacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregteacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
