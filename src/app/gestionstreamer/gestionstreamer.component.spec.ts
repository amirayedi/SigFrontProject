import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstreamerComponent } from './gestionstreamer.component';

describe('GestionstreamerComponent', () => {
  let component: GestionstreamerComponent;
  let fixture: ComponentFixture<GestionstreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionstreamerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionstreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
