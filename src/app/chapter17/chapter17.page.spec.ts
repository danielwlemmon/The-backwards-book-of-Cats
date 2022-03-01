import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter17Page } from './chapter17.page';

describe('Chapter17Page', () => {
  let component: Chapter17Page;
  let fixture: ComponentFixture<Chapter17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter17Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
