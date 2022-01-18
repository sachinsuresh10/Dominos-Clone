import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegpizzaComponent } from './vegpizza.component';

describe('VegpizzaComponent', () => {
  let component: VegpizzaComponent;
  let fixture: ComponentFixture<VegpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
