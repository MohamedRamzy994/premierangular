/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisacacheComponent } from './visacache.component';

describe('VisacacheComponent', () => {
  let component: VisacacheComponent;
  let fixture: ComponentFixture<VisacacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisacacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisacacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
