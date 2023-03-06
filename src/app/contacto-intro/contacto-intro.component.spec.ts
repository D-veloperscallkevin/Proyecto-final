import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoIntroComponent } from './contacto-intro.component';

describe('ContactoIntroComponent', () => {
  let component: ContactoIntroComponent;
  let fixture: ComponentFixture<ContactoIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
