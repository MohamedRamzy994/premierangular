/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModernpurchasesreportComponent } from './modernpurchasesreport.component';

describe('ModernpurchasesreportComponent', () => {
  let component: ModernpurchasesreportComponent;
  let fixture: ComponentFixture<ModernpurchasesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernpurchasesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernpurchasesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
