import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTarjetasComponent } from './crear-tarjetas.component';

describe('CrearTarjetasComponent', () => {
  let component: CrearTarjetasComponent;
  let fixture: ComponentFixture<CrearTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
