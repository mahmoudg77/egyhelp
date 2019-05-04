import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStockPage } from './history-stock.page';

describe('HistoryStockPage', () => {
  let component: HistoryStockPage;
  let fixture: ComponentFixture<HistoryStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
