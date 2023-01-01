import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpopupComponent } from './formpopup.component';

describe('FormpopupComponent', () => {
  let component: FormpopupComponent;
  let fixture: ComponentFixture<FormpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
