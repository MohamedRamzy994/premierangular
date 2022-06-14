import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileclientComponent } from './fileclient.component';

describe('FileclientComponent', () => {
  let component: FileclientComponent;
  let fixture: ComponentFixture<FileclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
