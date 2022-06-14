/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KindquantitybillComponent } from './kindquantitybill.component';

describe('KindquantitybillComponent', () => {
  let component: KindquantitybillComponent;
  let fixture: ComponentFixture<KindquantitybillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindquantitybillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindquantitybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
