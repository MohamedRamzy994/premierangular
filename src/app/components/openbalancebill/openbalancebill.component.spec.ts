/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpenbalancebillComponent } from './openbalancebill.component';

describe('OpenbalancebillComponent', () => {
  let component: OpenbalancebillComponent;
  let fixture: ComponentFixture<OpenbalancebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenbalancebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenbalancebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
