import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepEx1Component } from './dep-ex1.component';

describe('DepEx1Component', () => {
  let component: DepEx1Component;
  let fixture: ComponentFixture<DepEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
