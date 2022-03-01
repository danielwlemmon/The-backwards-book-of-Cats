import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter23Page } from './chapter23.page';

describe('Chapter23Page', () => {
  let component: Chapter23Page;
  let fixture: ComponentFixture<Chapter23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter23Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
