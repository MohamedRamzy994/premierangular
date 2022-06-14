/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldbuybackwithoutbillComponent } from './oldbuybackwithoutbill.component';

describe('OldbuybackwithoutbillComponent', () => {
  let component: OldbuybackwithoutbillComponent;
  let fixture: ComponentFixture<OldbuybackwithoutbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldbuybackwithoutbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldbuybackwithoutbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
