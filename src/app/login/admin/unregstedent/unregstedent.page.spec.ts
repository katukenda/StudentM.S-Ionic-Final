import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregstedentPage } from './unregstedent.page';

describe('UnregstedentPage', () => {
  let component: UnregstedentPage;
  let fixture: ComponentFixture<UnregstedentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregstedentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregstedentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
