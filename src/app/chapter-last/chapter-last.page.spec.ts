import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterLastPage } from './chapter-last.page';

describe('ChapterLastPage', () => {
  let component: ChapterLastPage;
  let fixture: ComponentFixture<ChapterLastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterLastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterLastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
