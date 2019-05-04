import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFinPage } from './history-fin.page';

describe('HistoryFinPage', () => {
  let component: HistoryFinPage;
  let fixture: ComponentFixture<HistoryFinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryFinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryFinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
