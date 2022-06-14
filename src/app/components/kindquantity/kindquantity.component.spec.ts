/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KindquantityComponent } from './kindquantity.component';

describe('KindquantityComponent', () => {
  let component: KindquantityComponent;
  let fixture: ComponentFixture<KindquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
