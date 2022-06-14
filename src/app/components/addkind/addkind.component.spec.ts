/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddkindComponent } from './addkind.component';

describe('AddkindComponent', () => {
  let component: AddkindComponent;
  let fixture: ComponentFixture<AddkindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
