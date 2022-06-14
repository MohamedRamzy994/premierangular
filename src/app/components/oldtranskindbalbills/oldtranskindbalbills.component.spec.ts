/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldtranskindbalbillsComponent } from './oldtranskindbalbills.component';

describe('OldtranskindbalbillsComponent', () => {
  let component: OldtranskindbalbillsComponent;
  let fixture: ComponentFixture<OldtranskindbalbillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldtranskindbalbillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldtranskindbalbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
