import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardPage } from './order-card.page';

describe('OrderCardPage', () => {
  let component: OrderCardPage;
  let fixture: ComponentFixture<OrderCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
