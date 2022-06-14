/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReasonwithdrawdepositComponent } from './reasonwithdrawdeposit.component';

describe('ReasonwithdrawdepositComponent', () => {
  let component: ReasonwithdrawdepositComponent;
  let fixture: ComponentFixture<ReasonwithdrawdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonwithdrawdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonwithdrawdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
