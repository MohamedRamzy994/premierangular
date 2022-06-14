/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListsalespointsComponent } from './listsalespoints.component';

describe('ListsalespointsComponent', () => {
  let component: ListsalespointsComponent;
  let fixture: ComponentFixture<ListsalespointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsalespointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsalespointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
