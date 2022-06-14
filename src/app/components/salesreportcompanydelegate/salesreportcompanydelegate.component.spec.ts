/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalesreportcompanydelegateComponent } from './salesreportcompanydelegate.component';

describe('SalesreportcompanydelegateComponent', () => {
  let component: SalesreportcompanydelegateComponent;
  let fixture: ComponentFixture<SalesreportcompanydelegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreportcompanydelegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreportcompanydelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
