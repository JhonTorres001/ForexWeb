import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajebotComponent } from './mensajebot.component';

describe('MensajebotComponent', () => {
  let component: MensajebotComponent;
  let fixture: ComponentFixture<MensajebotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajebotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
