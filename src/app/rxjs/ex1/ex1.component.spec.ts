import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Component_Rxjs } from './ex1.component';

describe('Ex1Component', () => {
  let component: Ex1Component_Rxjs;
  let fixture: ComponentFixture<Ex1Component_Rxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1Component_Rxjs ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1Component_Rxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
