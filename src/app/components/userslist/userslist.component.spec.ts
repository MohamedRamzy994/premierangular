/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserslistComponent } from './userslist.component';

describe('UserslistComponent', () => {
  let component: UserslistComponent;
  let fixture: ComponentFixture<UserslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
