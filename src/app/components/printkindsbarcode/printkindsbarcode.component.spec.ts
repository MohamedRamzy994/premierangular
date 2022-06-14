import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintkindsbarcodeComponent } from './printkindsbarcode.component';

describe('PrintkindsbarcodeComponent', () => {
  let component: PrintkindsbarcodeComponent;
  let fixture: ComponentFixture<PrintkindsbarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintkindsbarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintkindsbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
