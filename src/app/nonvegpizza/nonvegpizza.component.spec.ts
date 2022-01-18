import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegpizzaComponent } from './nonvegpizza.component';

describe('NonvegpizzaComponent', () => {
  let component: NonvegpizzaComponent;
  let fixture: ComponentFixture<NonvegpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
