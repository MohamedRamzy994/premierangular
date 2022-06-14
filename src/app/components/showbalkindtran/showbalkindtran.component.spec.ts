import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbalkindtranComponent } from './showbalkindtran.component';

describe('ShowbalkindtranComponent', () => {
  let component: ShowbalkindtranComponent;
  let fixture: ComponentFixture<ShowbalkindtranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbalkindtranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbalkindtranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
