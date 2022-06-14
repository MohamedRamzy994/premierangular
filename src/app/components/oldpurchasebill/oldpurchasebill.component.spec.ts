/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldpurchasebillComponent } from './oldpurchasebill.component';

describe('OldpurchasebillComponent', () => {
  let component: OldpurchasebillComponent;
  let fixture: ComponentFixture<OldpurchasebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldpurchasebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldpurchasebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
