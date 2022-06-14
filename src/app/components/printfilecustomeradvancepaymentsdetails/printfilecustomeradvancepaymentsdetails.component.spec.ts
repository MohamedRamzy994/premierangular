/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrintfilecustomeradvancepaymentsdetailsComponent } from './printfilecustomeradvancepaymentsdetails.component';

describe('PrintfilecustomeradvancepaymentsdetailsComponent', () => {
  let component: PrintfilecustomeradvancepaymentsdetailsComponent;
  let fixture: ComponentFixture<PrintfilecustomeradvancepaymentsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintfilecustomeradvancepaymentsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintfilecustomeradvancepaymentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
