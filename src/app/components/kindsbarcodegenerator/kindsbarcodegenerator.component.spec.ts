import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindsbarcodegeneratorComponent } from './kindsbarcodegenerator.component';

describe('KindsbarcodegeneratorComponent', () => {
  let component: KindsbarcodegeneratorComponent;
  let fixture: ComponentFixture<KindsbarcodegeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindsbarcodegeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindsbarcodegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
