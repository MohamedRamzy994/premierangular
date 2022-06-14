/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilesupplierComponent } from './filesupplier.component';

describe('FilesupplierComponent', () => {
  let component: FilesupplierComponent;
  let fixture: ComponentFixture<FilesupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
