import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExampleComponent } from './tooltip-example.component';

describe('TooltipExampleComponent', () => {
  let component: TooltipExampleComponent;
  let fixture: ComponentFixture<TooltipExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipExampleComponent]
    });
    fixture = TestBed.createComponent(TooltipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
