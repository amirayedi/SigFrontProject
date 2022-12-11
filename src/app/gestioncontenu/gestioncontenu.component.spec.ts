import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncontenuComponent } from './gestioncontenu.component';

describe('GestioncontenuComponent', () => {
  let component: GestioncontenuComponent;
  let fixture: ComponentFixture<GestioncontenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncontenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioncontenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
