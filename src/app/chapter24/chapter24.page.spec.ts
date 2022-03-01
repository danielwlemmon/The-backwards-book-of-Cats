import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter24Page } from './chapter24.page';

describe('Chapter24Page', () => {
  let component: Chapter24Page;
  let fixture: ComponentFixture<Chapter24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter24Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
