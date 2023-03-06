import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesIntroComponent } from './frases-intro.component';

describe('FrasesIntroComponent', () => {
  let component: FrasesIntroComponent;
  let fixture: ComponentFixture<FrasesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrasesIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrasesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
