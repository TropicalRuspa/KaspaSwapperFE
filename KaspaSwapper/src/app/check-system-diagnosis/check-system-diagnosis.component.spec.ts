import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSystemDiagnosisComponent } from './check-system-diagnosis.component';

describe('CheckSystemDiagnosisComponent', () => {
  let component: CheckSystemDiagnosisComponent;
  let fixture: ComponentFixture<CheckSystemDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSystemDiagnosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSystemDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
