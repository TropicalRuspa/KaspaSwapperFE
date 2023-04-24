import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartKaspaComponent } from './start-kaspa.component';

describe('StartKaspaComponent', () => {
  let component: StartKaspaComponent;
  let fixture: ComponentFixture<StartKaspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartKaspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartKaspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
