import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter21Page } from './chapter21.page';

describe('Chapter21Page', () => {
  let component: Chapter21Page;
  let fixture: ComponentFixture<Chapter21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter21Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
