/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldbuybackwithbillComponent } from './oldbuybackwithbill.component';

describe('OldbuybackwithbillComponent', () => {
  let component: OldbuybackwithbillComponent;
  let fixture: ComponentFixture<OldbuybackwithbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldbuybackwithbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldbuybackwithbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
