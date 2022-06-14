/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuybackwithoutbillComponent } from './buybackwithoutbill.component';

describe('BuybackwithoutbillComponent', () => {
  let component: BuybackwithoutbillComponent;
  let fixture: ComponentFixture<BuybackwithoutbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuybackwithoutbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuybackwithoutbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
