/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrintpurchasebillComponent } from './printpurchasebill.component';

describe('PrintpurchasebillComponent', () => {
  let component: PrintpurchasebillComponent;
  let fixture: ComponentFixture<PrintpurchasebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintpurchasebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintpurchasebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
