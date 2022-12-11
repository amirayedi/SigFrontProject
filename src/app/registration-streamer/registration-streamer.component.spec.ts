import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStreamerComponent } from './registration-streamer.component';

describe('RegistrationStreamerComponent', () => {
  let component: RegistrationStreamerComponent;
  let fixture: ComponentFixture<RegistrationStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationStreamerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
