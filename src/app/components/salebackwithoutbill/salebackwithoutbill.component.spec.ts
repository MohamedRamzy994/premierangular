/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalebackwithoutbillComponent } from './salebackwithoutbill.component';

describe('SalebackwithoutbillComponent', () => {
  let component: SalebackwithoutbillComponent;
  let fixture: ComponentFixture<SalebackwithoutbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalebackwithoutbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalebackwithoutbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
