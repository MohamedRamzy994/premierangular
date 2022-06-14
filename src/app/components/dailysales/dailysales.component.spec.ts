/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DailysalesComponent } from './dailysales.component';

describe('DailysalesComponent', () => {
  let component: DailysalesComponent;
  let fixture: ComponentFixture<DailysalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailysalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
