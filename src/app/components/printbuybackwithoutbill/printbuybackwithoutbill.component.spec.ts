/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrintbuybackwithoutbillComponent } from './printbuybackwithoutbill.component';

describe('PrintbuybackwithoutbillComponent', () => {
  let component: PrintbuybackwithoutbillComponent;
  let fixture: ComponentFixture<PrintbuybackwithoutbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintbuybackwithoutbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintbuybackwithoutbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
