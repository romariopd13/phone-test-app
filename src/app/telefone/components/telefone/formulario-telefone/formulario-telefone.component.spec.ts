import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTelefoneComponent } from './formulario-telefone.component';

describe('FormularioTelefoneComponent', () => {
  let component: FormularioTelefoneComponent;
  let fixture: ComponentFixture<FormularioTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTelefoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
