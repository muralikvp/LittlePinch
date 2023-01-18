import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obs1Component } from './obs1.component';

describe('Obs1Component', () => {
  let component: Obs1Component;
  let fixture: ComponentFixture<Obs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
