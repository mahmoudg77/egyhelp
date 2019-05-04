import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryServePage } from './history-serve.page';

describe('HistoryServePage', () => {
  let component: HistoryServePage;
  let fixture: ComponentFixture<HistoryServePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryServePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryServePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
