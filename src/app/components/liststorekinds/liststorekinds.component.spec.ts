/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListstorekindsComponent } from './liststorekinds.component';

describe('ListstorekindsComponent', () => {
  let component: ListstorekindsComponent;
  let fixture: ComponentFixture<ListstorekindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListstorekindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstorekindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
