import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeTextoComponent } from './caixa-de-texto.component';

describe('CaixaDeTextoComponent', () => {
  let component: CaixaDeTextoComponent;
  let fixture: ComponentFixture<CaixaDeTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaixaDeTextoComponent]
    });
    fixture = TestBed.createComponent(CaixaDeTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
