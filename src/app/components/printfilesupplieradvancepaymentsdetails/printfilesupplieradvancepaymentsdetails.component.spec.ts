import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintfilesuppliermoneydetailsComponent } from './printfilesupplieradvancepaymentsdetails.component';

describe('PrintfilesuppliermoneydetailsComponent', () => {
  let component: PrintfilesuppliermoneydetailsComponent;
  let fixture: ComponentFixture<PrintfilesuppliermoneydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintfilesuppliermoneydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintfilesuppliermoneydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
