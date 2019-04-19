import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClosePage } from './order-close.page';

describe('OrderClosePage', () => {
  let component: OrderClosePage;
  let fixture: ComponentFixture<OrderClosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderClosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderClosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
