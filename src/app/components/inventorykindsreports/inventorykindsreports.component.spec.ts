/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InventorykindsreportsComponent } from './inventorykindsreports.component';

describe('InventorykindsreportsComponent', () => {
  let component: InventorykindsreportsComponent;
  let fixture: ComponentFixture<InventorykindsreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorykindsreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorykindsreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
