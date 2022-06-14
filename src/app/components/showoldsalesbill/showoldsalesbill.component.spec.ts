/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowoldsalesbillComponent } from './showoldsalesbill.component';

describe('ShowoldsalesbillComponent', () => {
  let component: ShowoldsalesbillComponent;
  let fixture: ComponentFixture<ShowoldsalesbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowoldsalesbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoldsalesbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
