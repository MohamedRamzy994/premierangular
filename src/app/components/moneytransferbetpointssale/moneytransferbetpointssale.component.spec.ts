/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoneytransferbetpointssaleComponent } from './moneytransferbetpointssale.component';

describe('MoneytransferbetpointssaleComponent', () => {
  let component: MoneytransferbetpointssaleComponent;
  let fixture: ComponentFixture<MoneytransferbetpointssaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneytransferbetpointssaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneytransferbetpointssaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
