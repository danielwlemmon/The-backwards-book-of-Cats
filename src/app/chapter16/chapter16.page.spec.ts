import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter16Page } from './chapter16.page';

describe('Chapter16Page', () => {
  let component: Chapter16Page;
  let fixture: ComponentFixture<Chapter16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter16Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
