import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSwapKaspaComponent } from './new-swap-kaspa.component';

describe('NewSwapKaspaComponent', () => {
  let component: NewSwapKaspaComponent;
  let fixture: ComponentFixture<NewSwapKaspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSwapKaspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSwapKaspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
