/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailedreportwithdrawdepositsComponent } from './detailedreportwithdrawdeposits.component';

describe('DetailedreportwithdrawdepositsComponent', () => {
  let component: DetailedreportwithdrawdepositsComponent;
  let fixture: ComponentFixture<DetailedreportwithdrawdepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedreportwithdrawdepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedreportwithdrawdepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
