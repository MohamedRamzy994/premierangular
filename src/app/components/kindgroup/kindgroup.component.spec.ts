/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KindgroupComponent } from './kindgroup.component';

describe('KindgroupComponent', () => {
  let component: KindgroupComponent;
  let fixture: ComponentFixture<KindgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
