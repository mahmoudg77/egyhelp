import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitePage } from './website.page';

describe('WebsitePage', () => {
  let component: WebsitePage;
  let fixture: ComponentFixture<WebsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
