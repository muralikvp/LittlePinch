import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaEx1Component } from './la-ex1.component';

describe('LaEx1Component', () => {
  let component: LaEx1Component;
  let fixture: ComponentFixture<LaEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
