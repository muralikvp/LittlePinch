import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxEx2Component } from './rx-ex2.component';

describe('RxEx2Component', () => {
  let component: RxEx2Component;
  let fixture: ComponentFixture<RxEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
