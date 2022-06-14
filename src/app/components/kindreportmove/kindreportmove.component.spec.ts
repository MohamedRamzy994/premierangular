/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KindreportmoveComponent } from './kindreportmove.component';

describe('KindreportmoveComponent', () => {
  let component: KindreportmoveComponent;
  let fixture: ComponentFixture<KindreportmoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindreportmoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindreportmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
