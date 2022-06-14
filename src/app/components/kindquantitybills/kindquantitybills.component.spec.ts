/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KindquantitybillsComponent } from './kindquantitybills.component';

describe('KindquantitybillsComponent', () => {
  let component: KindquantitybillsComponent;
  let fixture: ComponentFixture<KindquantitybillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindquantitybillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindquantitybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
