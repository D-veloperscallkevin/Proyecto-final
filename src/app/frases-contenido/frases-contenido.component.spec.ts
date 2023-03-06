import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesContenidoComponent } from './frases-contenido.component';

describe('FrasesContenidoComponent', () => {
  let component: FrasesContenidoComponent;
  let fixture: ComponentFixture<FrasesContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrasesContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrasesContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
