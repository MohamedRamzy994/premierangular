/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowoldbuybackwithbillComponent } from './showoldbuybackwithbill.component';

describe('ShowoldbuybackwithbillComponent', () => {
  let component: ShowoldbuybackwithbillComponent;
  let fixture: ComponentFixture<ShowoldbuybackwithbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowoldbuybackwithbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoldbuybackwithbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
