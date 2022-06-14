/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowoldsalebackwithbillComponent } from './showoldsalebackwithbill.component';

describe('ShowoldsalebackwithbillComponent', () => {
  let component: ShowoldsalebackwithbillComponent;
  let fixture: ComponentFixture<ShowoldsalebackwithbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowoldsalebackwithbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoldsalebackwithbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
