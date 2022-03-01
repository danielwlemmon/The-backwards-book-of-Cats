import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter15Page } from './chapter15.page';

describe('Chapter15Page', () => {
  let component: Chapter15Page;
  let fixture: ComponentFixture<Chapter15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
