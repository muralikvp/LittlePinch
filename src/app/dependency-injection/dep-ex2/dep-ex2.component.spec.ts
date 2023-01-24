import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepEx2Component } from './dep-ex2.component';

describe('DepEx2Component', () => {
  let component: DepEx2Component;
  let fixture: ComponentFixture<DepEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
