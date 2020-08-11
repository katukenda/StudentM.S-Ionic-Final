import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgroupPage } from './chatgroup.page';

describe('ChatgroupPage', () => {
  let component: ChatgroupPage;
  let fixture: ComponentFixture<ChatgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatgroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
