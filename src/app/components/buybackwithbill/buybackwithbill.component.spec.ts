/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuybackwithbillComponent } from './buybackwithbill.component';

describe('BuybackwithbillComponent', () => {
  let component: BuybackwithbillComponent;
  let fixture: ComponentFixture<BuybackwithbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuybackwithbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuybackwithbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
