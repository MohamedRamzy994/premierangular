/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OldsalesbillsComponent } from './oldsalesbills.component';

describe('OldsalesbillsComponent', () => {
  let component: OldsalesbillsComponent;
  let fixture: ComponentFixture<OldsalesbillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldsalesbillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldsalesbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
