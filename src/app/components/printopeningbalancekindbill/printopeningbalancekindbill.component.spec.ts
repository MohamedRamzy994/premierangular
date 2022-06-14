import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintopeningbalancekindbillComponent } from './printopeningbalancekindbill.component';

describe('PrintopeningbalancekindbillComponent', () => {
  let component: PrintopeningbalancekindbillComponent;
  let fixture: ComponentFixture<PrintopeningbalancekindbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintopeningbalancekindbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintopeningbalancekindbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
