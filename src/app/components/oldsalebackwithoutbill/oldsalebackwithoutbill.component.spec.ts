/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldsalebackwithoutbillComponent } from './oldsalebackwithoutbill.component';

describe('OldsalebackwithoutbillComponent', () => {
  let component: OldsalebackwithoutbillComponent;
  let fixture: ComponentFixture<OldsalebackwithoutbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldsalebackwithoutbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldsalebackwithoutbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
