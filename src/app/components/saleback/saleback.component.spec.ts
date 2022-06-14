/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalebackComponent } from './saleback.component';

describe('SalebackComponent', () => {
  let component: SalebackComponent;
  let fixture: ComponentFixture<SalebackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalebackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
