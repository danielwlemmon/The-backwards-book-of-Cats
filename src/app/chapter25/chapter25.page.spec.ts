import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter25Page } from './chapter25.page';

describe('Chapter25Page', () => {
  let component: Chapter25Page;
  let fixture: ComponentFixture<Chapter25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter25Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
