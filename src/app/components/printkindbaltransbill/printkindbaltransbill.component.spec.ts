import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintkindbaltransbillComponent } from './printkindbaltransbill.component';

describe('PrintkindbaltransbillComponent', () => {
  let component: PrintkindbaltransbillComponent;
  let fixture: ComponentFixture<PrintkindbaltransbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintkindbaltransbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintkindbaltransbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
