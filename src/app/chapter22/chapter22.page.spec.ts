import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter22Page } from './chapter22.page';

describe('Chapter22Page', () => {
  let component: Chapter22Page;
  let fixture: ComponentFixture<Chapter22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
