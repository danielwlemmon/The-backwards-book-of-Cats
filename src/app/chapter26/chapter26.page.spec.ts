import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter26Page } from './chapter26.page';

describe('Chapter26Page', () => {
  let component: Chapter26Page;
  let fixture: ComponentFixture<Chapter26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter26Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
