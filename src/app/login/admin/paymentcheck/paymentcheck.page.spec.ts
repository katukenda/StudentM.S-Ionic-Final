import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcheckPage } from './paymentcheck.page';

describe('PaymentcheckPage', () => {
  let component: PaymentcheckPage;
  let fixture: ComponentFixture<PaymentcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentcheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
