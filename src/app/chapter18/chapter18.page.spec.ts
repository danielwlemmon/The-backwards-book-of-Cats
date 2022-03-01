import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter18Page } from './chapter18.page';

describe('Chapter18Page', () => {
  let component: Chapter18Page;
  let fixture: ComponentFixture<Chapter18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
