import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapKaspaComponent } from './swap-kaspa.component';

describe('SwapKaspaComponent', () => {
  let component: SwapKaspaComponent;
  let fixture: ComponentFixture<SwapKaspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapKaspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapKaspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
