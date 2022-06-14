/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldbuybackComponent } from './oldbuyback.component';

describe('OldbuybackComponent', () => {
  let component: OldbuybackComponent;
  let fixture: ComponentFixture<OldbuybackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldbuybackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldbuybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
