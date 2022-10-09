import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFormularioComponent } from './registro-formulario.component';

describe('RegistroFormularioComponent', () => {
  let component: RegistroFormularioComponent;
  let fixture: ComponentFixture<RegistroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
