import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaOrdenComponent } from './boleta-orden.component';

describe('BoletaOrdenComponent', () => {
  let component: BoletaOrdenComponent;
  let fixture: ComponentFixture<BoletaOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletaOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
