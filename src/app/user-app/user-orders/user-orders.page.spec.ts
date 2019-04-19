import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersPage } from './user-orders.page';

describe('UserOrdersPage', () => {
  let component: UserOrdersPage;
  let fixture: ComponentFixture<UserOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
