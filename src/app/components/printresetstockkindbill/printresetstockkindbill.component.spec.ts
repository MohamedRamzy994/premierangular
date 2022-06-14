import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintresetstockkindbillComponent } from './printresetstockkindbill.component';

describe('PrintresetstockkindbillComponent', () => {
  let component: PrintresetstockkindbillComponent;
  let fixture: ComponentFixture<PrintresetstockkindbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintresetstockkindbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintresetstockkindbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
