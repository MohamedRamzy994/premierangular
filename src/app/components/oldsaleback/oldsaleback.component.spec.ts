/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldsalebackComponent } from './oldsaleback.component';

describe('OldsalebackComponent', () => {
  let component: OldsalebackComponent;
  let fixture: ComponentFixture<OldsalebackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldsalebackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldsalebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
