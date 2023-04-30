import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsKaspaComponent } from './settings-kaspa.component';

describe('SettingsKaspaComponent', () => {
  let component: SettingsKaspaComponent;
  let fixture: ComponentFixture<SettingsKaspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsKaspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsKaspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
