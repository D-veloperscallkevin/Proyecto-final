import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoContenidoComponent } from './contacto-contenido.component';

describe('ContactoContenidoComponent', () => {
  let component: ContactoContenidoComponent;
  let fixture: ComponentFixture<ContactoContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
