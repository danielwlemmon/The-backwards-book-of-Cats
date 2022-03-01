import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter14Page } from './chapter14.page';

describe('Chapter14Page', () => {
  let component: Chapter14Page;
  let fixture: ComponentFixture<Chapter14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
