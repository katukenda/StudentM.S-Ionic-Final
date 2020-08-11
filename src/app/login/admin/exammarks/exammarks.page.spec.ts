import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExammarksPage } from './exammarks.page';

describe('ExammarksPage', () => {
  let component: ExammarksPage;
  let fixture: ComponentFixture<ExammarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExammarksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExammarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
