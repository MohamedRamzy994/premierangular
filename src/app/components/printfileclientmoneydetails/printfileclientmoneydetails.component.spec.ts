/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrintfileclientmoneydetailsComponent } from './printfileclientmoneydetails.component';

describe('PrintfileclientmoneydetailsComponent', () => {
  let component: PrintfileclientmoneydetailsComponent;
  let fixture: ComponentFixture<PrintfileclientmoneydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintfileclientmoneydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintfileclientmoneydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
