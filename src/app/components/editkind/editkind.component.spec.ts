/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditkindComponent } from './editkind.component';

describe('EditkindComponent', () => {
  let component: EditkindComponent;
  let fixture: ComponentFixture<EditkindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditkindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
