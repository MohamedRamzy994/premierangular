/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PulldepositdrawerstorageComponent } from './pulldepositdrawerstorage.component';

describe('PulldepositdrawerstorageComponent', () => {
  let component: PulldepositdrawerstorageComponent;
  let fixture: ComponentFixture<PulldepositdrawerstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulldepositdrawerstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulldepositdrawerstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
