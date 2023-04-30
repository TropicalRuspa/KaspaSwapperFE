import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSwapKaspaComponent } from './open-swap-kaspa.component';

describe('OpenSwapKaspaComponent', () => {
  let component: OpenSwapKaspaComponent;
  let fixture: ComponentFixture<OpenSwapKaspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSwapKaspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenSwapKaspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
