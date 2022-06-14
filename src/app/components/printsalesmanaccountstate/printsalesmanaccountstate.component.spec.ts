/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrintsalesmanaccountstateComponent } from './printsalesmanaccountstate.component';

describe('PrintsalesmanaccountstateComponent', () => {
  let component: PrintsalesmanaccountstateComponent;
  let fixture: ComponentFixture<PrintsalesmanaccountstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintsalesmanaccountstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintsalesmanaccountstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
